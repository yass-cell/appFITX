/* ================= almacenamiento ================= */
const KEY='gym-app-v1';
let mem=null,smode='memoria';
try{localStorage.setItem('__t','1');localStorage.removeItem('__t');smode='localStorage';}catch(e){}
const cleanDb=d=>{
  const x=d&&typeof d==='object'?d:{};
  if(!x.prs||typeof x.prs!=='object')x.prs={};
  if(!x.bases||typeof x.bases!=='object')x.bases={};
  if(!Array.isArray(x.body))x.body=[];
  return x;
};
function DB(){
  if(smode==='localStorage'){try{return cleanDb(JSON.parse(localStorage.getItem(KEY)||'{"prs":{},"bases":{},"body":[]}'))}catch(e){return cleanDb({})}}
  return mem||(mem=cleanDb({}));
}
function put(d){if(smode==='localStorage'){try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}}mem=d;}
const DONE_KEY='gym-done-v1';
let doneMem={};
function doneDb(){
  if(smode==='localStorage'){try{return JSON.parse(localStorage.getItem(DONE_KEY)||'{}')}catch(e){return{}}}
  return doneMem;
}
function putDone(d){if(smode==='localStorage'){try{localStorage.setItem(DONE_KEY,JSON.stringify(d))}catch(e){}}doneMem=d;}

/* Las fotos van en IndexedDB para no llenar el espacio reservado a marcas y casillas. */
const MEDIA_DB='gym-media-v1',MEDIA_STORE='photos';
let mediaPromise=null,mediaMem={};
function mediaDb(){
  if(!('indexedDB' in window))return Promise.resolve(null);
  if(mediaPromise)return mediaPromise;
  mediaPromise=new Promise(resolve=>{
    const req=indexedDB.open(MEDIA_DB,1);
    req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains(MEDIA_STORE))req.result.createObjectStore(MEDIA_STORE,{keyPath:'d'});};
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>resolve(null);
  });
  return mediaPromise;
}
async function photoGet(d){
  const db=await mediaDb();if(!db)return mediaMem[d]||null;
  return new Promise(resolve=>{const r=db.transaction(MEDIA_STORE,'readonly').objectStore(MEDIA_STORE).get(d);r.onsuccess=()=>resolve(r.result||null);r.onerror=()=>resolve(null);});
}
async function photoAll(){
  const db=await mediaDb();if(!db)return Object.values(mediaMem);
  return new Promise(resolve=>{const r=db.transaction(MEDIA_STORE,'readonly').objectStore(MEDIA_STORE).getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>resolve([]);});
}
async function photoPut(p){
  const db=await mediaDb();if(!db){mediaMem[p.d]=p;return;}
  return new Promise(resolve=>{const tx=db.transaction(MEDIA_STORE,'readwrite');tx.objectStore(MEDIA_STORE).put(p);tx.oncomplete=()=>resolve();tx.onerror=()=>resolve();});
}
async function photoRemove(d){
  const db=await mediaDb();if(!db){delete mediaMem[d];return;}
  return new Promise(resolve=>{const tx=db.transaction(MEDIA_STORE,'readwrite');tx.objectStore(MEDIA_STORE).delete(d);tx.oncomplete=()=>resolve();tx.onerror=()=>resolve();});
}
const st=document.getElementById('store');
st.textContent=smode==='localStorage'?'ACTIVO · guardado en este dispositivo':'SOLO SESIÓN · descarga el archivo y ábrelo en Chrome';
if(smode!=='localStorage')st.classList.add('off');
/* Almacenamiento persistente: el navegador no borra los registros aunque falte espacio. */
if(smode==='localStorage'&&navigator.storage&&navigator.storage.persist){
  navigator.storage.persisted().then(p=>p||navigator.storage.persist()).then(p=>{
    st.textContent+=p?' · PERSISTENTE':' · exporta copias a menudo';
  }).catch(()=>{});
}

/* ============ catálogo derivado de la rutina ============ */
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
/* La identidad de la casilla puede sobrevivir a un cambio de ejercicio/nombre. */
const doneExerciseId=e=>e.doneAs||slug(e.name);
/* ================= rutina personalizada ================= */
/* Cambios del usuario sobre la rutina base, en gym-app-v1 → plan:
   swap {'día|hueco': ejercicio}, drop {'día|hueco': fecha}, add {día: [{c: ejercicio, since: fecha}]}.
   El ejercicio nuevo hereda la casilla del hueco (doneAs): las sesiones pasadas siguen completas. */
const BASE_BLOCKS={};DAYS.forEach(d=>BASE_BLOCKS[d.id]=d.blocks);
const CAT={};
CATALOG.forEach(e=>{CAT[slug(e.name)]={...e,id:slug(e.name)}});
DAYS.forEach(d=>d.blocks.forEach(b=>b.ex.forEach(e=>{
  const id=slug(e.name);if(!e.m||CAT[id]||e.cardio!==undefined)return;
  const {pair,strength,doneAs,...rest}=e;CAT[id]={...rest,id,routine:true,big:!!strength};
})));
const cleanPlan=p=>({swap:{...(p?.swap||{})},drop:{...(p?.drop||{})},add:{...(p?.add||{})}});
const slotKey=(dayId,e)=>dayId+'|'+(e.slot||doneExerciseId(e));
function planChanges(p,dayId){
  const own=k=>!dayId||k.startsWith(dayId+'|');
  return Object.keys(p.swap).filter(own).length+Object.keys(p.drop).filter(own).length
    +Object.entries(p.add).filter(([d])=>!dayId||d===dayId).reduce((n,[,l])=>n+l.length,0);
}
function applyPlan(p){
  DAYS.forEach(d=>{
    const blocks=BASE_BLOCKS[d.id].map(b=>{
      const ex=b.ex.map(e=>{
        const slot=doneExerciseId(e),k=d.id+'|'+slot;
        if(p.drop[k])return null;
        const c=CAT[p.swap[k]];
        if(!c||c.id===slug(e.name))return e;
        const strength=!!e.strength&&!!c.big,{routine,big,...base}=c;
        return {...base,strength,pair:e.pair,doneAs:slot,slot,orig:e.name};
      }).filter(Boolean);
      // Una superserie sin pareja vuelve a ser un ejercicio normal.
      const letters=ex.map(e=>e.pair&&e.pair[0]);
      const t=/^Fuerza · /.test(b.t)&&ex.length===1&&ex[0].orig?'Fuerza · '+ex[0].name.toLowerCase():b.t;
      return {...b,t,ex:ex.map((e,i)=>e.pair&&letters.filter(l=>l===letters[i]).length<2?{...e,pair:undefined}:e)};
    }).filter(b=>b.ex.length);
    const extra=(p.add[d.id]||[]).filter(a=>CAT[a.c]).map(a=>{const {routine,big,id,...base}=CAT[a.c];return {...base,since:a.since,added:a.c}});
    if(extra.length)blocks.push({t:'Añadidos',tone:'wide',ex:extra});
    d.blocks=blocks;
  });
}
/* fin rutina personalizada */
const EX={}; // slug -> {name, grp}
const BASIC=new Set();
applyPlan(cleanPlan(DB().plan));
function registerExercises(){
  const reg=(e,b)=>{
    if(!e.m)return;
    const id=slug(e.name);
    if(!EX[id]||EX[id].grp==='Archivo') EX[id]={name:e.name,grp:G[e.m]||'Otros'};
    if(e.strength||e.base||b.t.indexOf('Fuerza')===0) BASIC.add(id);
  };
  DAYS.forEach(d=>d.blocks.forEach(b=>b.ex.forEach(e=>reg(e,b))));
  Object.values(BASE_BLOCKS).forEach(bs=>bs.forEach(b=>b.ex.forEach(e=>reg(e,b))));
  BASIC.forEach(id=>{ if(EX[id]) EX[id].grp='Básicos'; });
  /* marcas de ejercicios del catálogo o de rutinas anteriores (grupo Archivo) */
  Object.keys(DB().prs||{}).forEach(id=>{
    if(EX[id])return;
    EX[id]=CAT[id]?{name:CAT[id].name,grp:G[CAT[id].m]||'Otros'}:{name:id.replace(/-/g,' ').replace(/^./,c=>c.toUpperCase()),grp:'Archivo'};
  });
  if(Object.values(EX).some(e=>e.grp==='Archivo')&&!GROUPS.includes('Archivo'))GROUPS.push('Archivo');
}
const GROUPS=['Básicos','Pecho','Espalda','Hombro','Brazo','Pierna','Core y skills'];
registerExercises();

/* ================= métricas ================= */
const fmt=n=>Math.round(n*10)/10;
const dmy=s=>{const p=s.split('-');return p[2]+'/'+p[1]};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dateKey=d=>{
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+day;
};
const today=()=>dateKey(new Date());
const keyDate=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12,0,0,0)};
function weekDates(anchor=new Date()){
  const now=new Date(anchor);now.setHours(12,0,0,0);
  const mon=new Date(now);mon.setDate(now.getDate()-((now.getDay()+6)%7));
  return Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return dateKey(d)});
}
/* Con fecha: un ejercicio añadido después no deja incompletas las sesiones anteriores. */
function requiredExercises(d,date){
  if(d.rest)return [];
  return d.blocks.flatMap(b=>/opcional/i.test(b.t)?[]:b.ex
    .filter(e=>!/opcional/i.test(e.sets||'')&&!(date&&e.since&&date<e.since))
    .map(doneExerciseId));
}
function dayComplete(d){
  const done=doneDb();
  return weekDates().some(date=>{const ids=requiredExercises(d,date);return ids.length>0&&ids.every(id=>done[date+'|'+d.id+'|'+id])});
}
function prsOf(id){const d=DB();return (d.prs[id]||[]).slice().sort((a,b)=>a.d.localeCompare(b.d));}
function bestOf(id){const l=prsOf(id);if(!l.length)return null;return l.reduce((b,e)=>
  (+e.kg||0)>(+b.kg||0)||((+e.kg||0)===(+b.kg||0)&&(+e.r||0)>(+b.r||0))?e:b,l[0]);}
function rawPrFlags(list){
  let first=true,maxKg=-Infinity,repsAtKg={};
  return list.slice().sort((a,b)=>a.d.localeCompare(b.d)).map(e=>{
    const kg=+e.kg||0,r=+e.r||0,prior=repsAtKg[kg]||0;
    const loadPr=!first&&kg>maxKg,repPr=!first&&kg===maxKg&&r>prior;
    maxKg=Math.max(maxKg,kg);repsAtKg[kg]=Math.max(prior,r);first=false;
    return {...e,isPr:loadPr||repPr,prType:loadPr?'Carga':repPr?'Repeticiones':''};
  });
}
function allPrEvents(){
  const out=[];
  Object.entries(DB().prs||{}).forEach(([id,list])=>rawPrFlags(list).forEach(e=>{
    if(e.isPr)out.push({id,name:EX[id]?.name||id.replace(/-/g,' '),...e});
  }));
  return out.sort((a,b)=>a.d.localeCompare(b.d));
}

/* ================= tabs ================= */
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('nav button').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.pane').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  document.getElementById(b.dataset.p).classList.add('on');
  if(b.dataset.p==='p-progreso'){renderProgress();buildExList();drawChart();}
  window.scrollTo(0,0);
}));

/* ================= rutina ================= */
let week=Math.min(8,Math.max(1,parseInt(DB().aestheticProgramWeek)||1)),day=DAYS[(new Date().getDay()+6)%7].id;
function rail(){
  const el=document.getElementById('rail');el.innerHTML='';
  for(let w=1;w<=8;w++){
    const b=document.createElement('button');
    b.className='wk'+(w===week?' on':'');b.textContent=w;
    if(w===4)b.dataset.phase='deload';
    b.onclick=()=>{week=w;const d=DB();d.aestheticProgramWeek=w;put(d);rail();sesh();volume()};
    el.appendChild(b);
  }
  document.getElementById('phase').textContent=PH[week].toUpperCase()+' · CARDIO '+cardioMinutes[week].reduce((a,b)=>a+b,0)+' MIN/SEM';
  document.getElementById('phaseTiny').textContent='Semana '+week+' de 8';
}
function dayTabs(){
  const el=document.getElementById('days');el.innerHTML='';
  DAYS.forEach(d=>{
    const complete=dayComplete(d);
    const b=document.createElement('button');
    b.className='day'+(d.id===day?' on':'')+(d.wet?' wet':'')+(d.delt?' delt':'')+(complete?' done':'');
    b.innerHTML=`<b>${d.n}</b><s>${d.short}</s>${complete?'<span class="daycheck">✓</span>':''}`;
    b.setAttribute('aria-label',d.n+' '+d.short+(complete?' completado esta semana':''));
    b.onclick=()=>{day=d.id;dayTabs();sesh()};
    el.appendChild(b);
  });
  const n=TRAINING_DAYS.filter(dayComplete).length;
  document.getElementById('weekDoneText').textContent='Semana actual · '+n+'/'+TRAINING_DAYS.length+' sesiones';
  document.getElementById('weekDoneBar').style.width=Math.round(n/TRAINING_DAYS.length*100)+'%';
}
/* Última marca y objetivo de hoy según el foco de la semana: reps (mismo peso, +1 rep) o kg (+1 salto). */
const markText=e=>(+e.kg?fmt(+e.kg)+' kg':'PC')+' × '+e.r;
// Cargas con dos decimales cuando hace falta (7,5 + 1,25 = 8,75), sin ceros sobrantes.
const kgf=v=>Math.round(v*100)/100;
const kgText=kg=>kg>0?kgf(kg)+' kg':kg<0?kgf(kg)+' kg asist.':'PC';
const rangeOf=sets=>{const m=String(sets).match(/×\s*(\d+)(?:-(\d+))?/);return m?[+m[1],+(m[2]||m[1])]:null};
const roundTo=(v,step)=>Math.round(v/step)*step;
function todayTarget(e,last,w){
  const range=rangeOf(exerciseSets(e,w));if(!last||!range)return null;
  const [lo,hi]=range,kg=+last.kg||0,r=+last.r||0,inc=e.inc||2.5,focus=WEEK_FOCUS[w];
  let t;
  if(focus==='deload')t={kg:kg>0?roundTo(kg*.9,inc):kg,r:lo,note:'descarga · RIR 3-4'};
  else if(focus==='test'&&e.strength)t={kg,r:Math.max(r,lo),note:'top a RIR 1 → 1RM'};
  else if(focus==='kg')t=r>=lo?{kg:kg+inc,r:lo,note:'+'+kgf(inc)+' kg'}:{kg,r:lo,note:'consolida el peso'};
  else t=r<hi?{kg,r:r+1,note:'+1 rep'}:{kg,r:hi,note:'tope: sube kg la próxima'};
  if(e.strength&&t.kg>0&&focus!=='deload')t.backoff=roundTo(t.kg*(w>=5?.92:.9),inc);
  return t;
}
/* Descanso indicado en la técnica: último "N s" o "N min" de al menos 30 s (se usa el valor bajo de un rango). */
function restSeconds(e){
  const re=/(\d+)(?:\s*-\s*(\d+))?\s*(min|s)\b/g;let m,last=null;
  // Las pausas y tempos (1-5 s) no son descansos: solo cuentan valores de 30 s o más.
  while((m=re.exec(e.cue||'')))if(+m[1]*(m[3]==='min'?60:1)>=30)last=m;
  return last?+last[1]*(last[3]==='min'?60:1):0;
}
const mmss=t=>Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
function sesh(){
  const d=DAYS.find(x=>x.id===day),host=document.getElementById('sesh');
  host.dataset.tone=d.rest?'recovery':d.tag==='Pump'?'pump':d.tag==='Build'?'build':'heavy';
  let total=0;d.blocks.forEach(b=>total+=b.ex.length);
  const dnote=week===4&&!d.rest?' · descarga: series reducidas':'';
  let h=`<div class="seshhead"><h3>${d.s}</h3><span class="tag${d.wet?' wet':''}">${d.tag}</span></div>
    <p class="session-focus">${d.focus||''}</p><p class="seshnote">${d.note}</p>
    <p class="count">${d.rest?'CAMINATA + MOVILIDAD · AJUSTA SEGÚN ENERGÍA':d.duration+' · '+total+' ejercicios'}${dnote}</p>`;
  d.blocks.forEach((blk,bi)=>{
    h+=`<div class="blk" data-tone="${blk.tone||''}"><div class="blkhead"><h4>${blk.t}</h4><span class="rule"></span></div>`;
    blk.ex.forEach((e,ei)=>{
      const ph=e.dyn==='dragon'?DRAGON[dragonPhase(week)]:null;
      const dispName=ph?ph.name:e.name;
      const dispSets=exerciseSets(e,week);
      const shortCue=(ExerciseArt.specs[e.d]||ExerciseArt.specs.mob).labels[1];
      const id=e.m?slug(e.name):null;
      const doneId=today()+'|'+day+'|'+doneExerciseId(e),completed=!!doneDb()[doneId];
      const best=id?bestOf(id):null,last=id?prsOf(id).slice(-1)[0]:null;
      const tgt=todayTarget(e,last,week);
      const target=tgt?`hoy ${kgText(tgt.kg)} × ${tgt.r} · ${tgt.note}${tgt.backoff?' · back-off '+kgf(tgt.backoff)+' kg':''}`:'';
      const lastLine=last?`<span class="exlast">Última <b>${markText(last)}</b> · ${dmy(last.d)}${target?`<em>→ ${target}</em>`:''}</span>`:'';
      const rest=e.m?restSeconds(e):0;
      const restBtn=rest?`<button class="restbtn" data-rest="${rest}" data-name="${esc(dispName)}" aria-label="Iniciar descanso de ${mmss(rest)}"><b>${mmss(rest)}</b>descanso</button>`:'';
      const prBtn=id?`<button class="prbtn${best?' has':''}" data-pr="${bi}-${ei}">
          ${best?`<b>${best.kg}×${best.r}</b>marca`:`<b>+</b>marca`}</button>`:'';
      const doneBtn=`<button class="donebtn${completed?' on':''}" data-done="${doneId}" aria-label="${esc((completed?'Desmarcar ':'Completar ')+dispName)}" aria-pressed="${completed}">
          <b>${completed?'✓':'○'}</b>${completed?'hecho':'hacer'}</button>`;
      h+=`<div class="ex${completed?' done':''}"><div class="exrow">
        <button class="dia" data-movement="${bi}-${ei}" aria-label="Ver movimiento: ${esc(dispName)}">${ExerciseArt.svg(e.d,'combo')}<small>VER TÉCNICA ↗</small></button>
        <button class="exbody exercise-details" data-movement="${bi}-${ei}" aria-label="Ver detalles: ${esc(dispName)}" aria-haspopup="dialog">
          <span class="exname">${e.pair?`<i class="pair">${e.pair}</i>`:''}${dispName}${e.orig||e.added?`<i class="swapmark">${e.added?'añadido':'cambio'}</i>`:''}</span>
          <span class="exmeta">${dispSets}</span>
          ${lastLine}<span class="cue">${esc(shortCue)}.</span>
        </button><div class="exactions">${doneBtn}${prBtn}${restBtn}</div></div>
        ${id?`<div class="prform" id="prf-${bi}-${ei}">
          <div class="r">
            <div><p class="lbl">Kg / +lastre / −asistencia</p><input type="number" inputmode="decimal" step="0.5" id="kg-${bi}-${ei}" placeholder="0"></div>
            <div><p class="lbl">Reps o seg</p><input type="number" inputmode="numeric" step="1" min="1" id="rp-${bi}-${ei}" placeholder="5"></div>
            <button class="btn" data-save="${bi}-${ei}" data-id="${id}">OK</button>
          </div>
          <p class="prlast">Guarda una serie de referencia por ejercicio y día. Otro guardado la sustituye. ${e.d==='bench'?'En banca, peso total de la barra y los discos.':e.d==='chestpress'?'Anota la carga indicada y usa siempre la misma máquina y ajuste.':e.d==='pullover'?'En pullover, peso total de la única mancuerna.':'En mancuernas, kg por mano.'}</p>
          ${best?`<p class="prlast">Tu mejor: <b>${best.kg} kg × ${best.r}</b> (${dmy(best.d)})</p>`:''}
        </div>`:''}
      </div>`;
    });
    h+='</div>';
  });
  const changes=planChanges(cleanPlan(DB().plan),d.id);
  h+=`<div class="plan-tools"><button class="btn ghost" id="addEx">+ Añadir ejercicio</button>${changes?`<button class="btn ghost" id="resetDay">Restaurar ${d.n.toLowerCase()} original · ${changes} ${changes>1?'cambios':'cambio'}</button>`:''}</div>`;
  host.innerHTML=h;
  document.getElementById('addEx').addEventListener('click',()=>openPicker({mode:'add',day:d.id}));
  const reset=document.getElementById('resetDay');
  if(reset)reset.addEventListener('click',()=>armConfirm(reset,'Toca otra vez para restaurar',()=>editPlan(p=>{
    for(const k of Object.keys(p.swap))if(k.startsWith(d.id+'|'))delete p.swap[k];
    for(const k of Object.keys(p.drop))if(k.startsWith(d.id+'|'))delete p.drop[k];
    delete p.add[d.id];
  })));
  host.querySelectorAll('[data-movement]').forEach(b=>b.addEventListener('click',()=>{
    const [bi,ei]=b.dataset.movement.split('-').map(Number),e=d.blocks[bi].ex[ei],spec=ExerciseArt.specs[e.d]||ExerciseArt.specs.mob;
    const ph=e.dyn==='dragon'?DRAGON[dragonPhase(week)]:null;
    document.getElementById('movementTitle').textContent=ph?ph.name:e.name;
    document.getElementById('movementSets').textContent=exerciseSets(e,week);
    const strength=document.getElementById('movementStrength');
    strength.textContent=e.strength?'Serie top al RPE de la semana + back-off · descanso 3 min':'';
    strength.hidden=!e.strength;
    document.getElementById('movementDialog').dataset.tone=d.blocks[bi].tone||'';
    document.getElementById('movementFrames').innerHTML=spec.labels.map((label,i)=>`<figure>${ExerciseArt.svg(e.d,i)}<figcaption><b>0${i+1}</b> ${esc(label)}</figcaption></figure>`).join('');
    document.getElementById('movementCue').textContent=ph?ph.cue:e.cue;
    const why=document.getElementById('movementWhy');
    why.textContent=(ph?ph.why:e.why)||'';
    why.hidden=!why.textContent;
    movementCtx={day:d.id,e};
    const orig=document.getElementById('origBtn'),drop=document.getElementById('dropBtn');
    orig.hidden=!e.orig;orig.textContent=e.orig?'Volver a '+e.orig:'';
    delete drop.dataset.armed;drop.classList.remove('armed');drop.textContent=e.added?'Quitar añadido':'Quitar del día';
    document.getElementById('swapBtn').hidden=!!e.added||e.cardio!==undefined;
    document.getElementById('movementDialog').showModal();
  }));
  host.querySelectorAll('[data-done]').forEach(b=>b.addEventListener('click',()=>{
    const d=doneDb(),id=b.dataset.done;
    if(d[id])delete d[id];else d[id]=true;
    putDone(d);dayTabs();sesh();renderProgress();
  }));
  host.querySelectorAll('[data-rest]').forEach(b=>b.addEventListener('click',()=>startRest(+b.dataset.rest,b.dataset.name)));
  host.querySelectorAll('[data-pr]').forEach(b=>b.addEventListener('click',()=>{
    const f=document.getElementById('prf-'+b.dataset.pr);
    f.classList.toggle('open');
  }));
  host.querySelectorAll('[data-save]').forEach(b=>b.addEventListener('click',()=>{
    const k=b.dataset.save,id=b.dataset.id;
    const kg=parseFloat(document.getElementById('kg-'+k).value)||0;
    const r=parseInt(document.getElementById('rp-'+k).value)||0;
    if(!r){alert('Faltan las repeticiones o los segundos.');return;}
    const d=DB(),f=today();
    d.prs[id]=(d.prs[id]||[]).filter(x=>x.d!==f);
    d.prs[id].push({d:f,kg,r});
    put(d);sesh();renderProgress();buildExList();drawChart();
  }));
}

/* ================= editar rutina: cambiar, quitar y añadir ================= */
let movementCtx=null,pickCtx=null,pickChip='';
const PICK_CHIPS=[['top','Recomendados'],['pec','Pecho'],['esp','Espalda'],['dl da dpo','Hombro'],['bi','Bíceps'],['tri','Tríceps'],['ant','Antebrazo'],['pie','Cuádriceps'],['ham ere','Isquios'],['cal','Gemelo'],['core','Core'],['all','Todos']];
function editPlan(fn){
  const d=DB(),p=cleanPlan(d.plan);fn(p);d.plan=p;put(d);
  applyPlan(p);registerExercises();
  dayTabs();sesh();volume();renderProgress();buildGroups();buildExList();drawChart();
}
/* Primer toque arma el botón; el segundo, en 5 s, confirma. */
function armConfirm(btn,label,fn){
  if(btn.dataset.armed){fn();return;}
  btn.dataset.armed='1';const old=btn.textContent;btn.textContent=label;btn.classList.add('armed');
  setTimeout(()=>{delete btn.dataset.armed;btn.textContent=old;btn.classList.remove('armed');},5000);
}
function openPicker(ctx){
  pickCtx=ctx;
  const m=ctx.e?.m||'';
  pickChip=(PICK_CHIPS.find(([k])=>k.split(' ').includes(m))||PICK_CHIPS[0])[0];
  document.getElementById('pickTitle').textContent=ctx.mode==='swap'?'Cambiar '+ctx.e.name:'Añadir al '+DAYS.find(x=>x.id===ctx.day).n.toLowerCase();
  document.getElementById('pickSearch').value='';
  renderPicker();
  document.getElementById('pickDialog').showModal();
}
function renderPicker(){
  const q=slug(document.getElementById('pickSearch').value||''),day=DAYS.find(x=>x.id===pickCtx.day);
  const inDay=new Set(day.blocks.flatMap(b=>b.ex.map(e=>slug(e.name))));
  document.getElementById('pickChips').innerHTML=PICK_CHIPS.map(([k,l])=>`<button type="button" data-chip="${k}" aria-pressed="${k===pickChip}">${l}</button>`).join('');
  const list=Object.values(CAT).filter(c=>!inDay.has(c.id)
    &&(q?c.id.includes(q):pickChip==='all'||(pickChip==='top'?c.top:pickChip.split(' ').includes(c.m))))
    .sort((a,b)=>(b.top?1:0)-(a.top?1:0)||a.name.localeCompare(b.name,'es'));
  document.getElementById('pickList').innerHTML=list.length?list.map(c=>`<button type="button" class="pick-row" data-pick="${c.id}">
    <span class="pick-art">${ExerciseArt.svg(c.d,'combo')}</span>
    <span class="pick-text"><b>${esc(c.name)}${c.top?'<i>★</i>':''}</b><small>${esc(MUS[c.m]||'')} · ${esc(c.sets)}${c.routine?' · en tu rutina':''}</small><em>${esc(c.why)}</em></span></button>`).join('')
    :'<p class="pick-empty">No hay ejercicios con ese filtro.</p>';
  document.querySelectorAll('#pickChips [data-chip]').forEach(b=>b.addEventListener('click',()=>{pickChip=b.dataset.chip;document.getElementById('pickSearch').value='';renderPicker();}));
  document.querySelectorAll('#pickList [data-pick]').forEach(b=>b.addEventListener('click',()=>{
    const c=b.dataset.pick,ctx=pickCtx;
    document.getElementById('pickDialog').close();document.getElementById('movementDialog').close();
    editPlan(p=>{
      if(ctx.mode==='swap'){
        const k=slotKey(ctx.day,ctx.e),base=BASE_BLOCKS[ctx.day].flatMap(x=>x.ex).find(x=>slotKey(ctx.day,x)===k);
        if(base&&slug(base.name)===c)delete p.swap[k];else p.swap[k]=c;
      }else (p.add[ctx.day]||(p.add[ctx.day]=[])).push({c,since:today()});
    });
  }));
}
document.getElementById('pickSearch').addEventListener('input',renderPicker);
document.getElementById('swapBtn').addEventListener('click',()=>openPicker({mode:'swap',day:movementCtx.day,e:movementCtx.e}));
document.getElementById('origBtn').addEventListener('click',()=>{
  const {day:dayId,e}=movementCtx;document.getElementById('movementDialog').close();
  editPlan(p=>{delete p.swap[slotKey(dayId,e)]});
});
document.getElementById('dropBtn').addEventListener('click',ev=>{
  const btn=ev.currentTarget,{day:dayId,e}=movementCtx;
  armConfirm(btn,'Toca otra vez para quitar',()=>{
    document.getElementById('movementDialog').close();
    editPlan(p=>{
      if(e.added){p.add[dayId]=(p.add[dayId]||[]).filter(a=>a.c!==e.added);if(!p.add[dayId].length)delete p.add[dayId];}
      else{const k=slotKey(dayId,e);delete p.swap[k];p.drop[k]=today();}
    });
  });
});

/* ================= series por semana ================= */
const nsets=s=>{const m=String(s).match(/^\s*(\d+)\s*[×x]/);return m?parseInt(m[1]):0};
function weekTotals(w){
  const tot={};
  DAYS.forEach(d=>d.blocks.forEach(b=>b.ex.forEach(e=>{
    if(!e.m||/opcional/i.test(b.t)||/opcional/i.test(e.sets||''))return;
    tot[e.m]=(tot[e.m]||0)+nsets(exerciseSets(e,w));
  })));
  return tot;
}
/* Rango orientativo de hipertrofia por músculo: 10-20 series directas por semana. */
const VOL_MAX=24,VOL_BAND=[10,20],VOL_MAJOR=new Set(['pec','esp','pie','ham']);
function volume(){
  const tot=weekTotals(week),base=weekTotals(1);
  const order=['pec','esp','dl','dpo','da','bi','tri','ant','core','pie','ham','ere','cal'].filter(k=>tot[k]);
  document.getElementById('priorityGrid').innerHTML=[
    ['pec','Pecho',tot.pec||0],['esp','Espalda',tot.esp||0],['dl','Lateral',tot.dl||0],['bi','Bí / Trí',(tot.bi||0)+' / '+(tot.tri||0)],['pie','Pierna',(tot.pie||0)+(tot.ham||0)]
  ].map(([key,label,value])=>`<div class="priority${String(value).includes("/")?" split":""}" data-muscle="${key}"><b>${value}</b><span>${label}</span><small>series / sem</small></div>`).join('');
  const top=Object.entries(base).filter(([k])=>MUS[k]).sort((a,b)=>b[1]-a[1]).slice(0,3);
  document.getElementById('heroTags').innerHTML=top.map(([k,v])=>`<span data-muscle="${k}">${esc(MUS[k].toUpperCase())} · ${v}</span>`).join('');
  document.getElementById('introSummary').textContent=top.map(([k,v])=>MUS[k].toUpperCase()+' '+v).join(' · ');
  document.getElementById('volwk').textContent='Semana '+week;
  const pct=v=>Math.min(100,v/VOL_MAX*100);
  document.getElementById('vrows').innerHTML=order.map(k=>{
    const v=tot[k]||0,key=(k==='dl'||k==='dpo'),low=VOL_MAJOR.has(k)&&v<VOL_BAND[0]&&week!==4;
    return `<div class="vrow${key?' key':''}${low?' low':''}"><span class="vname">${MUS[k]}</span>
      <span class="vbar"><s style="left:${pct(VOL_BAND[0])}%;width:${pct(VOL_BAND[1])-pct(VOL_BAND[0])}%"></s><i style="width:${pct(v)}%"></i></span>
      <span class="vnum">${v}</span></div>`;
  }).join('');
}

/* ================= portada plegable ================= */
function setIntro(collapsed,save=true){
  document.getElementById('intro').hidden=collapsed;
  const t=document.getElementById('introToggle');
  t.setAttribute('aria-expanded',String(!collapsed));
  t.querySelector('em').textContent=collapsed?'VER PLAN +':'OCULTAR −';
  if(save){const d=DB();d.introCollapsed=collapsed;put(d);}
}
document.getElementById('introToggle').addEventListener('click',()=>setIntro(!document.getElementById('intro').hidden));

/* ================= descanso entre series ================= */
let restEnd=0,restTimer=null,audio=null;
function beep(){
  try{
    audio=audio||new (window.AudioContext||window.webkitAudioContext)();
    const o=audio.createOscillator(),g=audio.createGain();o.frequency.value=880;o.type='square';
    g.gain.setValueAtTime(.12,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.5);
    o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+.5);
  }catch(e){}
}
function restTick(){
  const bar=document.getElementById('restBar'),left=Math.ceil((restEnd-Date.now())/1000);
  if(left>0){document.getElementById('restTime').textContent=mmss(left);return;}
  clearInterval(restTimer);restTimer=null;
  document.getElementById('restTime').textContent='¡SERIE!';bar.classList.add('over');
  try{navigator.vibrate&&navigator.vibrate([250,120,250])}catch(e){}
  beep();
  setTimeout(()=>{if(!restTimer)bar.hidden=true},6000);
}
function startRest(sec,name){
  try{if(!audio)audio=new (window.AudioContext||window.webkitAudioContext)();else if(audio.state==='suspended')audio.resume();}catch(e){}
  restEnd=Date.now()+sec*1000;
  const bar=document.getElementById('restBar');bar.hidden=false;bar.classList.remove('over');
  document.getElementById('restName').textContent=name;
  clearInterval(restTimer);restTimer=setInterval(restTick,250);restTick();
}
document.getElementById('restPlus').addEventListener('click',()=>{
  if(!restTimer){restEnd=Date.now();restTimer=setInterval(restTick,250);document.getElementById('restBar').classList.remove('over');}
  restEnd+=30000;restTick();
});
document.getElementById('restStop').addEventListener('click',()=>{clearInterval(restTimer);restTimer=null;document.getElementById('restBar').hidden=true;});

/* ================= especialización 30 días (opcional) ================= */
const SPEC_MUSCLES={
  dl:{name:'Deltoide lateral',ex:'Elevación lateral en polea a una mano',art:'lateral',drop:'Mientras dure el bloque, el miércoles haz solo el gemelo de la superserie C y deja las parciales del sábado en 2 series.'},
  cal:{name:'Gemelo',ex:'Elevación de gemelo a una pierna',art:'calf',drop:'Mientras dure el bloque, deja el gemelo del miércoles en 2 series.'},
  bi:{name:'Bíceps',ex:'Curl en polea baja',art:'curlc',drop:'Mientras dure el bloque, omite el curl en polea del lunes.'},
  dpo:{name:'Deltoide posterior',ex:'Pájaro en polea o máquina',art:'rear',drop:'Mientras dure el bloque, deja el face pull del viernes en 1 serie.'}
};
const SPEC_DAYS=30,SPEC_REST=10;
let specChoice='dl';
const daysBetween=(a,b)=>Math.round((keyDate(b)-keyDate(a))/864e5);
function renderSpec(){
  const host=document.getElementById('spec'),sp=DB().spec,t=today();
  if(!sp||!SPEC_MUSCLES[sp.m]){
    const wasOpen=!!host.querySelector('details[open]');
    host.innerHTML=`<details class="spec-intro"${wasOpen?' open':''}><summary><span class="spec-k">OPCIONAL</span> Especialización 30 días <em>+</em></summary>
      <p>Un músculo, un ejercicio de aislamiento, <b>5 minutos al día durante 30 días</b>. Después, 10 días sin trabajo directo de ese músculo para que recupere. Se basa en el protocolo Nucleus Overload. Lo que se ha medido en personas es que series muy frecuentes se toleran y que el crecimiento aparece <b>después</b>, durante el descanso. No está demostrado que se formen fibras nuevas: trátalo como un bloque de especialización.</p>
      <div class="spec-pick" role="group" aria-label="Músculo">${Object.entries(SPEC_MUSCLES).map(([k,v])=>`<button class="chip${k===specChoice?' on':''}" data-spec-m="${k}" aria-pressed="${k===specChoice}">${v.name}</button>`).join('')}</div>
      <button class="btn" id="specStart">Empezar hoy</button>
      <p class="spec-small">No cuenta como sesión de pesas. Para si duele la articulación, si las reps totales bajan dos días seguidos o si caen tus marcas principales.</p></details>`;
    host.querySelectorAll('[data-spec-m]').forEach(b=>b.addEventListener('click',()=>{specChoice=b.dataset.specM;renderSpec();}));
    document.getElementById('specStart').addEventListener('click',()=>{const d=DB();d.spec={m:specChoice,start:today(),log:{}};put(d);renderSpec();});
    return;
  }
  const M=SPEC_MUSCLES[sp.m],n=daysBetween(sp.start,t)+1,log=sp.log||{};
  const dates=Array.from({length:SPEC_DAYS},(_,i)=>{const d=keyDate(sp.start);d.setDate(d.getDate()+i);return dateKey(d)});
  const done=dates.filter(d=>log[d]).length,phase=n<1?'wait':n<=SPEC_DAYS?'block':n<=SPEC_DAYS+SPEC_REST?'rest':'end';
  const cells=dates.map((d,i)=>`<i class="${log[d]?'on':d<t?'miss':d===t?'now':''}" title="Día ${i+1}${log[d]?' · '+(log[d]===true?'hecho':log[d]+' reps'):''}"></i>`).join('');
  const reps=dates.map(d=>+log[d]||0).filter(Boolean);
  let body='';
  if(phase==='block'){
    const todayVal=log[t];
    body=`<div class="spec-row"><div class="spec-art">${ExerciseArt.svg(M.art,'combo')}</div><div>
      <p class="spec-ex">${M.ex}</p>
      <p class="spec-proto">1 serie de activación con un peso para unas 25-30 reps, parando a 2 del fallo. Después 4 miniseries de 3-5 reps con 15 s de descanso. Máximo 5 min, siempre el mismo peso.</p>
      <div class="spec-log"><input type="number" inputmode="numeric" min="1" step="1" id="specReps" placeholder="reps totales" value="${typeof todayVal==='number'?todayVal:''}" aria-label="Repeticiones totales de hoy">
      <button class="btn${todayVal?' ghost':''}" id="specDone">${todayVal?'✓ Hecho hoy':'Hecho hoy'}</button></div></div></div>
      <p class="spec-small">${M.drop} Para si duele la articulación, si las reps totales bajan dos días seguidos o si caen tus marcas principales.</p>`;
  }else if(phase==='rest'){
    body=`<p class="spec-proto"><b>Descanso de ${M.name.toLowerCase()}: día ${n-SPEC_DAYS} de ${SPEC_REST}.</b> Sin trabajo directo de este músculo; el resto de la rutina sigue igual. Si coincide con la semana de descarga, mejor.</p>`;
  }else if(phase==='end'){
    body=`<p class="spec-proto"><b>Bloque terminado.</b> ${done}/${SPEC_DAYS} días hechos${reps.length>1?' · reps totales '+reps[0]+' → '+reps[reps.length-1]:''}. Vuelve a tu rutina normal y compara las marcas de este músculo en las próximas semanas.</p>`;
  }
  const status=phase==='block'?'DÍA '+n+' / '+SPEC_DAYS:phase==='rest'?'DESCANSO '+(n-SPEC_DAYS)+' / '+SPEC_REST:phase==='end'?'TERMINADO':'EMPIEZA '+dmy(sp.start);
  host.innerHTML=`<div class="spec-card"><div class="spec-head"><span class="spec-k">ESPECIALIZACIÓN</span><b>${M.name}</b><span class="spec-status">${status}</span></div>
    <div class="spec-cells" aria-label="${done} de ${SPEC_DAYS} días hechos">${cells}</div>${body}
    <button class="textbtn" id="specStop">${phase==='end'?'Cerrar y empezar otro':'Parar bloque'}</button></div>`;
  const btn=document.getElementById('specDone');
  if(btn)btn.addEventListener('click',()=>{
    const r=parseInt(document.getElementById('specReps').value),d=DB();
    d.spec.log=d.spec.log||{};
    if(d.spec.log[t]&&!(r>0))delete d.spec.log[t];else d.spec.log[t]=r>0?r:true;
    put(d);renderSpec();
  });
  document.getElementById('specStop').addEventListener('click',()=>{
    if(phase!=='end'&&!confirm('¿Parar el bloque de especialización? Se borra su registro diario.'))return;
    const d=DB();delete d.spec;put(d);renderSpec();
  });
}

/* ================= calendario y resumen ================= */
const DAY_LETTERS=['L','M','X','J','V','S','D'];
let calendarCursor=(()=>{const d=keyDate(today());return new Date(d.getFullYear(),d.getMonth(),1,12)})();
let selectedCalendarDate=today(),bodyMetric='weight',photoDates=new Set(),detailPhotoToken=0,photoControlToken=0;

function doneIndex(){
  const out={};
  Object.entries(doneDb()).forEach(([key,on])=>{
    if(!on)return;
    const p=key.split('|');if(p.length<3)return;
    const date=p[0],dayId=p[1],id=p.slice(2).join('|');
    (((out[date]||(out[date]={}))[dayId]||(out[date][dayId]=new Set()))).add(id);
  });
  return out;
}
function exerciseLabel(dayId,id){
  const d=HISTORY_DAYS.find(x=>x.id===dayId);
  if(d){const e=d.blocks.flatMap(b=>b.ex).find(x=>doneExerciseId(x)===id);if(e)return e.name;}
  return id.replace(/-/g,' ').replace(/^./,c=>c.toUpperCase());
}
function sessionStats(date,d,index=doneIndex()){
  const set=index[date]?.[d.id]||new Set(),required=requiredExercises(d,date);
  const requiredSet=new Set(required),doneRequired=required.filter(id=>set.has(id));
  const optional=[...set].filter(id=>!requiredSet.has(id));
  return {date,day:d,started:set.size>0,total:required.length,done:doneRequired.length,
    complete:required.length>0&&required.every(id=>set.has(id)),required,doneSet:set,optional};
}
function dateActivity(date,index=doneIndex()){
  const sessions=HISTORY_DAYS.map(d=>sessionStats(date,d,index)).filter(s=>s.started);
  const done=sessions.reduce((n,s)=>n+s.done,0),total=sessions.reduce((n,s)=>n+s.total,0);
  return {date,sessions,done,total,has:sessions.length>0,complete:sessions.length>0&&sessions.every(s=>s.complete)};
}
function weekSummaryFor(anchor=new Date(),index=doneIndex()){
  const dates=weekDates(anchor);
  const routine=TRAINING_DAYS.map(d=>{
    const options=dates.map(date=>sessionStats(date,d,index));
    return options.reduce((best,s)=>s.done>best.done?s:best,options[0]);
  });
  const prs=allPrEvents().filter(e=>e.d>=dates[0]&&e.d<=dates[6]);
  return {dates,routine,days:routine.filter(s=>s.complete).length,
    exercises:routine.reduce((n,s)=>n+s.done,0),
    total:TRAINING_DAYS.reduce((n,d)=>n+requiredExercises(d).length,0),prs};
}
function fullWeekStreak(index=doneIndex()){
  let anchor=new Date(),sum=weekSummaryFor(anchor,index);
  if(sum.days<TRAINING_DAYS.length)anchor.setDate(anchor.getDate()-7);
  let streak=0;
  for(let i=0;i<104;i++){
    if(weekSummaryFor(anchor,index).days!==TRAINING_DAYS.length)break;
    streak++;anchor.setDate(anchor.getDate()-7);
  }
  return streak;
}
function bodyRecords(){
  const map={};(DB().body||[]).forEach(e=>{if(e&&e.d)map[e.d]=e});
  return Object.values(map).sort((a,b)=>a.d.localeCompare(b.d));
}
function bodyMap(){const out={};bodyRecords().forEach(e=>out[e.d]=e);return out;}
function prsByDate(){const out={};allPrEvents().forEach(e=>(out[e.d]||(out[e.d]=[])).push(e));return out;}

function renderWeekDashboard(){
  const index=doneIndex(),s=weekSummaryFor(new Date(),index),pbd=prsByDate();
  document.getElementById('weekRange').textContent=dmy(s.dates[0])+' – '+dmy(s.dates[6]);
  document.getElementById('statDays').textContent=s.days+'/'+TRAINING_DAYS.length;
  document.getElementById('statExercises').textContent=s.exercises+'/'+s.total;
  document.getElementById('statPrs').textContent='★ '+s.prs.length;
  document.getElementById('statStreak').textContent=fullWeekStreak(index);
  document.getElementById('weekDots').innerHTML=s.dates.map((date,i)=>{
    const a=dateActivity(date,index),stars=(pbd[date]||[]).length;
    return `<div class="wdot${a.complete?' done':a.has?' partial':''}" title="${date}">
      <b>${DAY_LETTERS[i]}</b><span>${keyDate(date).getDate()}</span>${stars?`<i class="mini-star">★${stars>1?stars:''}</i>`:''}</div>`;
  }).join('');
}
function renderCalendar(){
  const y=calendarCursor.getFullYear(),m=calendarCursor.getMonth(),index=doneIndex(),pbd=prsByDate(),bm=bodyMap();
  document.getElementById('calendarTitle').textContent=new Intl.DateTimeFormat('es-ES',{month:'long',year:'numeric'}).format(calendarCursor);
  const first=(new Date(y,m,1).getDay()+6)%7,last=new Date(y,m+1,0).getDate();
  let h=Array.from({length:first},()=>'<button class="calday blank" tabindex="-1"></button>').join('');
  for(let n=1;n<=last;n++){
    const date=dateKey(new Date(y,m,n,12)),a=dateActivity(date,index),stars=(pbd[date]||[]).length;
    const cls=a.complete?' complete':a.has?' partial':'';
    h+=`<button class="calday${cls}${date===today()?' today':''}${date===selectedCalendarDate?' selected':''}${date>today()?' future':''}" data-caldate="${date}" aria-label="${n}${a.complete?', entrenamiento completo':a.has?', entrenamiento parcial':''}${stars?', '+stars+' PR':''}">
      <span class="num">${n}</span>${bm[date]||photoDates.has(date)?'<i class="measure"></i>':''}${stars?`<span class="stars">★${stars>1?stars:''}</span>`:''}</button>`;
  }
  document.getElementById('calGrid').innerHTML=h;
  document.querySelectorAll('[data-caldate]').forEach(b=>b.addEventListener('click',()=>selectProgressDate(b.dataset.caldate)));
}
function selectProgressDate(date){
  selectedCalendarDate=date;
  const d=keyDate(date);calendarCursor=new Date(d.getFullYear(),d.getMonth(),1,12);
  renderCalendar();renderDayDetail(date);loadBodyForm(date);renderPhotoControl(date);
}
function renderDayDetail(date=selectedCalendarDate){
  const host=document.getElementById('dayDetail'),a=dateActivity(date),prs=prsByDate()[date]||[],body=bodyMap()[date];
  const title=new Intl.DateTimeFormat('es-ES',{weekday:'long',day:'numeric',month:'long'}).format(keyDate(date));
  let h=`<div class="detailhead"><h3>${esc(title)}</h3><span>${a.sessions.length?a.done+'/'+a.total+' ejercicios':'Sin entrenamiento'}</span></div>`;
  a.sessions.forEach(s=>{
    const optional=s.optional.map(id=>`<span class="done">✓ ${esc(exerciseLabel(s.day.id,id))}</span>`).join('');
    h+=`<div class="detailsession"><div class="detailtitle"><b>${esc(s.day.n+' · '+s.day.short)}</b><span class="${s.complete?'ok':''}">${s.complete?'✓ COMPLETO':s.done+'/'+s.total}</span></div>
      <div class="detailchecks">${s.required.map(id=>`<span class="${s.doneSet.has(id)?'done':''}">${s.doneSet.has(id)?'✓':'○'} ${esc(exerciseLabel(s.day.id,id))}</span>`).join('')}${optional}</div></div>`;
  });
  if(prs.length)h+=`<div class="detailprs">${prs.map(e=>`<div class="detailpr"><span>★</span><b>${esc(e.name)}</b><em>${e.kg!==0?fmt(e.kg)+' kg × '+e.r:e.r+' reps/s'} · ${e.prType}</em></div>`).join('')}</div>`;
  if(body)h+=`<div class="detailbody">${body.weight?`<span>${fmt(body.weight)} kg</span>`:''}${body.waist?`<span>Cintura ${fmt(body.waist)} cm</span>`:''}</div>`;
  if(!a.has&&!prs.length&&!body&&!photoDates.has(date))h+='<p class="detail-empty">Todavía no hay actividad registrada este día.</p>';
  h+='<div class="detailphoto" id="detailPhoto"></div>';
  host.innerHTML=h;
  const requested=++detailPhotoToken;
  photoGet(date).then(p=>{
    if(requested!==detailPhotoToken||date!==selectedCalendarDate)return;
    const el=document.getElementById('detailPhoto');if(!el||!p)return;
    el.innerHTML=`<img src="${p.data}" alt="Foto de progreso del ${date}"><button class="textbtn danger" id="detailDeletePhoto">Eliminar foto</button>`;
    document.getElementById('detailDeletePhoto').onclick=deleteSelectedPhoto;
  });
}
document.getElementById('calPrev').addEventListener('click',()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()-1,1,12);renderCalendar()});
document.getElementById('calNext').addEventListener('click',()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,1,12);renderCalendar()});

function loadBodyForm(date=selectedCalendarDate){
  const rec=bodyMap()[date];
  document.getElementById('bodyDate').value=date;
  document.getElementById('bodyWeight').value=rec?.weight||'';
  document.getElementById('bodyWaist').value=rec?.waist||'';
  document.getElementById('deleteBody').hidden=!rec;
}
function drawBodyChart(){
  const host=document.getElementById('bodyChart'),unit=bodyMetric==='weight'?'kg':'cm';
  const list=bodyRecords().filter(e=>Number.isFinite(+e[bodyMetric])&&+e[bodyMetric]>0);
  if(!list.length){host.innerHTML=`<p class="empty">Añade ${bodyMetric==='weight'?'tu peso':'tu cintura'} una vez por semana para ver la tendencia.</p>`;return;}
  const W=700,H=180,L=44,R=12,T=14,B=28,x0=keyDate(list[0].d).getTime(),x1=keyDate(list[list.length-1].d).getTime();
  let y0=Math.min(...list.map(e=>+e[bodyMetric])),y1=Math.max(...list.map(e=>+e[bodyMetric]));
  const pad=(y1-y0)*.18||Math.max(y1*.015,.5);y0=Math.max(0,y0-pad);y1+=pad;
  const px=x=>L+(x1===x0 ? .5 : (x-x0)/(x1-x0))*(W-L-R),py=y=>T+(1-(y-y0)/(y1-y0||1))*(H-T-B);
  let grid='';for(let i=0;i<=3;i++){const v=y0+(y1-y0)*i/3,y=py(v);grid+=`<line x1="${L}" y1="${y}" x2="${W-R}" y2="${y}" stroke="#22333F"/><text x="${L-6}" y="${y+4}" text-anchor="end" fill="#7B94A2" font-family="JetBrains Mono, monospace" font-size="10">${fmt(v)}</text>`;}
  const points=list.map(e=>px(keyDate(e.d).getTime()).toFixed(1)+','+py(+e[bodyMetric]).toFixed(1)).join(' ');
  const dots=list.map(e=>`<circle cx="${px(keyDate(e.d).getTime())}" cy="${py(+e[bodyMetric])}" r="4" fill="#0E171E" stroke="#7B5CFF" stroke-width="2"><title>${dmy(e.d)} · ${fmt(+e[bodyMetric])} ${unit}</title></circle>`).join('');
  host.innerHTML=`<svg class="chart" viewBox="0 0 ${W} ${H}">${grid}${list.length>1?`<polyline points="${points}" fill="none" stroke="#7B5CFF" stroke-width="2.5"/>`:''}${dots}<text x="${L}" y="${H-7}" fill="#7B94A2" font-family="JetBrains Mono, monospace" font-size="10">${dmy(list[0].d)}</text><text x="${W-R}" y="${H-7}" text-anchor="end" fill="#7B94A2" font-family="JetBrains Mono, monospace" font-size="10">${dmy(list[list.length-1].d)}</text></svg>`;
}
async function refreshPhotoDates(){photoDates=new Set((await photoAll()).map(p=>p.d));renderCalendar();renderDayDetail();}
async function renderPhotoControl(date=selectedCalendarDate){
  const token=++photoControlToken,p=await photoGet(date);if(token!==photoControlToken||document.getElementById('bodyDate').value!==date)return;
  document.getElementById('photoPreview').innerHTML=p?`<img src="${p.data}" alt="Foto de progreso del ${date}">`:'<span>Sin foto para esta fecha</span>';
  document.getElementById('choosePhoto').textContent=p?'Cambiar foto':'Añadir foto';
  document.getElementById('deletePhoto').hidden=!p;
}
function renderProgress(){
  renderWeekDashboard();renderCalendar();renderDayDetail();loadBodyForm();drawBodyChart();renderPhotoControl();
}

/* ================= progreso ================= */
const COLORS=['#FF6B35','#2FC2D6','#7B5CFF','#C9A227','#5FD68B','#E5484D','#EEF4F3'];
let grp='Básicos', sel=new Set(['press-banca','dominada-lastrada','fondos-lastrados']);
let plotKg=true,plotReps=true,plotE1=false;
const e1rm=e=>+e.kg>0?+e.kg*(1+(+e.r||0)/30):null;
function buildGroups(){
  document.getElementById('groups').innerHTML=GROUPS.map(g=>
    `<button class="chip${g===grp?' on':''}" data-g="${g}">${g}</button>`).join('');
  document.querySelectorAll('#groups .chip').forEach(c=>c.addEventListener('click',()=>{
    grp=c.dataset.g; buildGroups(); buildExList();
  }));
}
function buildExList(){
  const items=Object.entries(EX).filter(([id,e])=>e.grp===grp)
    .sort((a,b)=>a[1].name.localeCompare(b[1].name));
  document.getElementById('exlist').innerHTML=items.map(([id,e])=>{
    const n=prsOf(id).length;
    return `<div class="exitem${sel.has(id)?' sel':''}${n?'':' nodata'}" data-id="${id}">
      <span class="box"></span><span class="nm">${e.name}</span>
      <span class="dt">${n?n+' reg':'—'}</span></div>`;
  }).join('');
  document.querySelectorAll('.exitem').forEach(it=>it.addEventListener('click',()=>{
    const id=it.dataset.id;
    if(sel.has(id))sel.delete(id);else{
      if(sel.size>=5){alert('Máximo 5 ejercicios a la vez para que el gráfico se lea.');return;}
      sel.add(id);
    }
    buildExList(); drawChart();
  }));
}
/* KG y REPES a la vez: un panel por ejercicio, kg como línea (eje izquierdo) y reps como barras (eje derecho). */
function bothPanel(s,si){
  const W=360,H=150,L=34,R=28,T=12,B=22,list=s.list,n=list.length;
  const kgs=list.map(e=>+e.kg||0),reps=list.map(e=>+e.r||0);
  let k0=Math.min(...kgs),k1=Math.max(...kgs);const kp=(k1-k0)*.2||Math.max(Math.abs(k1)*.1,2.5);k0-=kp;k1+=kp;if(Math.min(...kgs)>=0)k0=Math.max(0,k0);
  const r1=Math.max(...reps)*1.25||1;
  const x=i=>L+(n===1?.5:i/(n-1))*(W-L-R),yk=v=>T+(1-(v-k0)/(k1-k0||1))*(H-T-B),yr=v=>T+(1-v/r1)*(H-T-B);
  const bw=Math.max(4,Math.min(18,(W-L-R)/Math.max(n,1)*.45));
  let g='';
  for(let i=0;i<=2;i++){const v=k0+(k1-k0)*i/2,y=yk(v);g+=`<line x1="${L}" y1="${y.toFixed(1)}" x2="${W-R}" y2="${y.toFixed(1)}" class="cg"/><text x="${L-6}" y="${(y+4).toFixed(1)}" text-anchor="end" class="ct ck">${fmt(v)}</text><text x="${W-R+6}" y="${(yr(r1*(i/2))+4).toFixed(1)}" class="ct cr">${Math.round(r1*i/2)}</text>`;}
  const bars=list.map((e,i)=>`<rect x="${(x(i)-bw/2).toFixed(1)}" y="${yr(+e.r).toFixed(1)}" width="${bw.toFixed(1)}" height="${(H-B-yr(+e.r)).toFixed(1)}" class="cbar" data-s="${si}" data-p="${i}"/>`).join('');
  const line=n>1?`<polyline points="${list.map((e,i)=>x(i).toFixed(1)+','+yk(+e.kg||0).toFixed(1)).join(' ')}" class="cline"/>`:'';
  const dots=list.map((e,i)=>`<circle cx="${x(i).toFixed(1)}" cy="${yk(+e.kg||0).toFixed(1)}" r="3.5" class="cdot" data-s="${si}" data-p="${i}"/>`).join('');
  const xl=[0,n-1].filter((v,i,a)=>a.indexOf(v)===i).map(i=>`<text x="${x(i).toFixed(1)}" y="${H-7}" text-anchor="middle" class="ct">${dmy(list[i].d)}</text>`).join('');
  const lastE=list[n-1];
  return `<div class="bothpanel"><div class="bothhead"><b>${esc(s.name)}</b><span>${markText(lastE)}</span></div><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(s.name)}: kg en línea y repeticiones en barras">${g}${bars}${line}${dots}${xl}</svg></div>`;
}
function drawBoth(series,host,leg,cap,tbl){
  host.innerHTML=series.map(bothPanel).join('');
  leg.innerHTML='<span><i class="lk"></i>kg · eje izquierdo</span><span><i class="lr"></i>reps · eje derecho</span>';
  cap.textContent='Toca un punto o una barra para ver la marca de ese día';
  host.querySelectorAll('[data-s]').forEach(c=>c.addEventListener('click',()=>{
    const s=series[+c.dataset.s],e=s.list[+c.dataset.p];
    cap.textContent=s.name+' · '+dmy(e.d)+' · '+markText(e)+(e1rm(e)?' · 1RM ≈ '+fmt(e1rm(e))+' kg':'');
  }));
  drawHistory(series,tbl);
}
function drawChart(){
  const host=document.getElementById('chartHost'),leg=document.getElementById('legend'),
        cap=document.getElementById('cap'),tbl=document.getElementById('prtable');
  const series=[...sel].map(id=>({id,name:EX[id]?EX[id].name:id,list:prsOf(id)}))
    .map(s=>plotE1?{...s,list:s.list.filter(e=>e1rm(e))}:s)
    .filter(s=>s.list.length>0);
  leg.innerHTML='';cap.textContent='';
  if(!series.length){
    host.innerHTML='<p class="empty">Selecciona ejercicios con registros.<br>Las marcas se anotan desde la pestaña Rutina, con el botón de cada ejercicio.</p>';
    tbl.innerHTML='';return;
  }
  const mode=plotE1?'e1rm':plotKg&&plotReps?'both':plotKg?'kg':'reps';
  if(mode==='both'){drawBoth(series,host,leg,cap,tbl);return;}
  const W=700,H=260,L=48,R=12,T=14,B=30;
  let allX=[],allY=[];
  series.forEach(s=>{
    s.pts=s.list.map(e=>({x:mode==='scatter'?e.r:new Date(e.d).getTime(),y:mode==='reps'?e.r:mode==='e1rm'?fmt(e1rm(e)):e.kg,e}));
    allX.push(...s.pts.map(p=>p.x));allY.push(...s.pts.map(p=>p.y));
  });
  let x0=Math.min(...allX),x1=Math.max(...allX);
  let y0=Math.min(...allY),y1=Math.max(...allY);
  if(mode==='scatter'){
    const xpad=(x1-x0)*.08||1;x0=Math.max(0,x0-xpad);x1+=xpad;
  }
  const pad=(y1-y0)*0.15||Math.max(Math.abs(y1)*0.1,1);y0-=pad;y1+=pad;
  if(mode==='reps'||Math.min(...allY)>=0)y0=Math.max(0,y0);
  const px=x=>L+(x1===x0?0.5:(x-x0)/(x1-x0))*(W-L-R);
  const py=v=>T+(1-(v-y0)/(y1-y0||1))*(H-T-B);
  let g='';
  for(let i=0;i<=3;i++){
    const v=y0+(y1-y0)*i/3,y=py(v);
    g+=`<line x1="${L}" y1="${y}" x2="${W-R}" y2="${y}" stroke="#22333F"/>
        <text x="${L-7}" y="${y+4}" text-anchor="end" fill="#7B94A2" font-family="JetBrains Mono, monospace" font-size="11">${fmt(v)}</text>`;
  }
  let lines='',dots='';
  series.forEach((s,si)=>{
    const c=COLORS[si%COLORS.length];
    const pl=s.pts.map(p=>px(p.x).toFixed(1)+','+py(p.y).toFixed(1)).join(' ');
    if(mode!=='scatter'&&s.pts.length>1)lines+=`<polyline points="${pl}" fill="none" stroke="${c}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
    s.pts.forEach((p,pi)=>{
      dots+=`<circle cx="${px(p.x).toFixed(1)}" cy="${py(p.y).toFixed(1)}" r="4.5" fill="#0E171E" stroke="${c}" stroke-width="2" style="cursor:pointer" data-s="${si}" data-p="${pi}"/>`;
    });
    leg.innerHTML+=`<span><i style="background:${c}"></i>${s.name}</span>`;
  });
  let xl='';
  if(mode==='scatter'){
    for(let i=0;i<=3;i++){
      const v=x0+(x1-x0)*i/3;
      xl+=`<text x="${px(v).toFixed(1)}" y="${H-9}" text-anchor="middle" fill="#7B94A2" font-family="JetBrains Mono, monospace" font-size="11">${fmt(v)}</text>`;
    }
  }else{
    const dtsAll=[...new Set([].concat(...series.map(s=>s.list.map(e=>e.d))))].sort();
    xl=[dtsAll[0],dtsAll[dtsAll.length-1]].filter((v,i,a)=>a.indexOf(v)===i)
      .map(d=>`<text x="${px(new Date(d).getTime()).toFixed(1)}" y="${H-9}" text-anchor="middle" fill="#7B94A2" font-family="JetBrains Mono, monospace" font-size="11">${dmy(d)}</text>`).join('');
  }
  host.innerHTML=`<svg class="chart" viewBox="0 0 ${W} ${H}">${g}${lines}${dots}${xl}</svg>`;
  cap.textContent=mode==='e1rm'?'1RM estimado (Epley: kg × (1 + reps/30)) · solo series con carga · toca un punto':mode==='scatter'?'Eje X: repeticiones · Eje Y: kg reales · toca un punto':
    mode==='kg'?'Eje X: tiempo · Eje Y: kg reales · toca un punto':'Eje X: tiempo · Eje Y: repeticiones/segundos · toca un punto';
  host.querySelectorAll('circle').forEach(c=>c.addEventListener('click',()=>{
    const s=series[+c.dataset.s],p=s.pts[+c.dataset.p],e=p.e;
    cap.textContent=s.name+' · '+dmy(e.d)+' · '+(e.kg!==0?e.kg+' kg × '+e.r:e.r+' reps/s')+(e1rm(e)?' · 1RM ≈ '+fmt(e1rm(e))+' kg':'');
  }));
  drawHistory(series,tbl);
}
/* Historial de lo seleccionado, con PR y borrado por fecha. */
function drawHistory(series,tbl){
  tbl.innerHTML=series.map((s,si)=>{
    const flags=rawPrFlags(s.list);
    return `<h3 style="font-family:Anton,sans-serif;font-weight:400;font-size:15px;letter-spacing:.05em;text-transform:uppercase;margin:18px 0 2px;color:${COLORS[si%COLORS.length]}">${s.name}</h3>`+
      s.list.slice().reverse().map((e,ri)=>{
        const i=s.list.length-1-ri;
        return `<div class="hrow"><span class="hd">${dmy(e.d)}</span>
          <span class="hv">${e.kg!==0?e.kg+' kg × '+e.r:e.r}${e1rm(e)?`<small> ≈${Math.round(e1rm(e))}</small>`:''}</span>
          ${flags[i].isPr?'<span class="prb">PR</span>':''}
          <span class="he">${flags[i].prType}</span>
          <button class="del" data-id="${s.id}" data-d="${e.d}">×</button></div>`;
      }).join('');
  }).join('');
  tbl.querySelectorAll('.del').forEach(b=>b.addEventListener('click',()=>{
    const d=DB();d.prs[b.dataset.id]=(d.prs[b.dataset.id]||[]).filter(x=>x.d!==b.dataset.d);
    if(!d.prs[b.dataset.id].length)delete d.prs[b.dataset.id];
    put(d);buildExList();drawChart();renderProgress();
  }));
}

function syncPlotMode(){
  const kg=document.getElementById('plotKg'),reps=document.getElementById('plotReps'),e1=document.getElementById('plotE1');
  e1.classList.toggle('on',plotE1);e1.setAttribute('aria-pressed',plotE1);
  kg.classList.toggle('on',plotKg&&!plotE1);kg.setAttribute('aria-pressed',plotKg&&!plotE1);
  reps.classList.toggle('on',plotReps&&!plotE1);reps.setAttribute('aria-pressed',plotReps&&!plotE1);
  drawChart();
}
document.getElementById('plotE1').addEventListener('click',()=>{plotE1=!plotE1;syncPlotMode();});
document.getElementById('plotKg').addEventListener('click',()=>{
  if(plotE1){plotE1=false;syncPlotMode();return;}
  if(plotKg&&!plotReps)return;
  plotKg=!plotKg;syncPlotMode();
});
document.getElementById('plotReps').addEventListener('click',()=>{
  if(plotE1){plotE1=false;syncPlotMode();return;}
  if(plotReps&&!plotKg)return;
  plotReps=!plotReps;syncPlotMode();
});

/* ================= recomposición ================= */
document.getElementById('bodyDate').addEventListener('change',e=>{
  if(!e.target.value)return;
  selectProgressDate(e.target.value);
});
document.getElementById('saveBody').addEventListener('click',()=>{
  const date=document.getElementById('bodyDate').value||today();
  const weight=parseFloat(document.getElementById('bodyWeight').value);
  const waist=parseFloat(document.getElementById('bodyWaist').value);
  if(!(weight>0)&&!(waist>0)){alert('Añade el peso, la cintura o ambos.');return;}
  const d=DB(),map={};(d.body||[]).forEach(e=>map[e.d]=e);
  map[date]={d:date,...(weight>0?{weight}:{}),...(waist>0?{waist}:{})};
  d.body=Object.values(map).sort((a,b)=>a.d.localeCompare(b.d));put(d);
  selectedCalendarDate=date;const parsed=keyDate(date);calendarCursor=new Date(parsed.getFullYear(),parsed.getMonth(),1,12);
  renderProgress();
});
document.getElementById('deleteBody').addEventListener('click',()=>{
  const date=document.getElementById('bodyDate').value;if(!date)return;
  if(!confirm('¿Eliminar las medidas de '+dmy(date)+'?'))return;
  const d=DB();d.body=(d.body||[]).filter(e=>e.d!==date);put(d);renderProgress();
});
function setBodyMetric(metric){
  bodyMetric=metric;
  const w=document.getElementById('metricWeight'),c=document.getElementById('metricWaist');
  w.classList.toggle('on',metric==='weight');w.setAttribute('aria-pressed',metric==='weight');
  c.classList.toggle('on',metric==='waist');c.setAttribute('aria-pressed',metric==='waist');
  drawBodyChart();
}
document.getElementById('metricWeight').addEventListener('click',()=>setBodyMetric('weight'));
document.getElementById('metricWaist').addEventListener('click',()=>setBodyMetric('waist'));

function compressPhoto(file){
  return new Promise((resolve,reject)=>{
    const rd=new FileReader();
    rd.onerror=()=>reject(new Error('read'));
    rd.onload=()=>{
      const img=new Image();img.onerror=()=>reject(new Error('image'));
      img.onload=()=>{
        const max=1200,scale=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));
        const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));
        const ctx=canvas.getContext('2d');ctx.fillStyle='#0A1015';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL('image/jpeg',.8));
      };
      img.src=rd.result;
    };
    rd.readAsDataURL(file);
  });
}
document.getElementById('choosePhoto').addEventListener('click',()=>document.getElementById('photoInput').click());
document.getElementById('photoInput').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;
  if(!file.type.startsWith('image/')){alert('Selecciona una imagen.');return;}
  const btn=document.getElementById('choosePhoto'),old=btn.textContent;btn.disabled=true;btn.textContent='Guardando…';
  try{
    const date=document.getElementById('bodyDate').value||today(),data=await compressPhoto(file);
    await photoPut({d:date,data,updatedAt:new Date().toISOString()});photoDates.add(date);selectedCalendarDate=date;renderProgress();
  }catch(err){alert('No se pudo guardar esa foto. Prueba con otra imagen.');}
  finally{btn.disabled=false;btn.textContent=old;e.target.value='';renderPhotoControl();}
});
async function deleteSelectedPhoto(){
  const date=document.getElementById('bodyDate').value||selectedCalendarDate;
  if(!date||!confirm('¿Eliminar la foto del '+dmy(date)+'?'))return;
  await photoRemove(date);photoDates.delete(date);renderProgress();
}
document.getElementById('deletePhoto').addEventListener('click',deleteSelectedPhoto);

/* ================= datos ================= */
async function completeBackup(){
  return {version:2,...DB(),done:doneDb(),photos:await photoAll()};
}
document.getElementById('viewBackup').addEventListener('click',async()=>{
  const backup=await completeBackup();
  document.getElementById('backupJson').value=JSON.stringify(backup,null,2);
  document.getElementById('backupSummary').textContent=Object.values(backup.prs).reduce((n,list)=>n+list.length,0)+' marcas · '+Object.values(backup.done).filter(Boolean).length+' ejercicios completados · '+backup.body.length+' medidas · '+backup.photos.length+' fotos';
  document.getElementById('backupPreview').hidden=false;
});
document.getElementById('exp').addEventListener('click',async()=>{
  const btn=document.getElementById('exp'),old=btn.textContent;btn.disabled=true;btn.textContent='Preparando…';
  try{
    const blob=new Blob([JSON.stringify(await completeBackup(),null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download='fuerza-completa-'+today()+'.json';a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }finally{btn.disabled=false;btn.textContent=old;}
});
document.getElementById('imp').addEventListener('click',()=>document.getElementById('file').click());
document.getElementById('file').addEventListener('change',ev=>{
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=async()=>{
    try{
      const inc=JSON.parse(rd.result);
      if(!inc||typeof inc!=='object'||!inc.prs)throw 0;
      const cur=DB();
      Object.entries(inc.prs).forEach(([id,list])=>{
        const map={};(cur.prs[id]||[]).forEach(e=>map[e.d]=e);
        list.forEach(e=>map[e.d]=e);
        cur.prs[id]=Object.values(map).sort((a,b)=>a.d.localeCompare(b.d));
      });
      if(inc.bases)cur.bases={...cur.bases,...inc.bases};
      if(cur.aestheticProgramWeek===undefined&&Number.isInteger(inc.aestheticProgramWeek)){
        cur.aestheticProgramWeek=Math.min(8,Math.max(1,inc.aestheticProgramWeek));
      }
      if(inc.spec&&typeof inc.spec==='object'&&SPEC_MUSCLES[inc.spec.m]){
        if(!cur.spec)cur.spec=inc.spec;
        else if(cur.spec.start===inc.spec.start&&cur.spec.m===inc.spec.m)cur.spec.log={...(cur.spec.log||{}),...(inc.spec.log||{})};
      }
      if(inc.plan&&typeof inc.plan==='object'&&!planChanges(cleanPlan(cur.plan)))cur.plan=cleanPlan(inc.plan);
      if(Array.isArray(inc.body)){
        const body={};(cur.body||[]).forEach(e=>{if(e?.d)body[e.d]=e});
        inc.body.forEach(e=>{if(e?.d)body[e.d]=e});cur.body=Object.values(body).sort((a,b)=>a.d.localeCompare(b.d));
      }
      put(cur);
      if(inc.done&&typeof inc.done==='object'){
        const merged={...doneDb()};Object.entries(inc.done).forEach(([k,v])=>{if(v)merged[k]=true});putDone(merged);
      }
      if(Array.isArray(inc.photos))for(const p of inc.photos){if(p?.d&&typeof p.data==='string'&&p.data.startsWith('data:image/'))await photoPut(p);}
      week=Math.min(8,Math.max(1,parseInt(DB().aestheticProgramWeek)||1));
      applyPlan(cleanPlan(DB().plan));registerExercises();
      rail();dayTabs();sesh();volume();renderSpec();buildExList();drawChart();await refreshPhotoDates();renderProgress();
      alert('Copia completa importada y fusionada sin borrar tus datos actuales.');
    }catch(e){alert('Ese archivo no tiene el formato esperado.');}
    ev.target.value='';
  };
  rd.readAsText(f);
});

/* ================= empezar de cero ================= */
/* Borra marcas, casillas, medidas, fotos y el bloque de especialización de ESTE dispositivo. Solo con dos toques del usuario. */
async function wipeAll(){
  const plan=DB().plan; // la rutina personalizada no es un registro: se conserva
  try{localStorage.removeItem(KEY);localStorage.removeItem(DONE_KEY);}catch(e){}
  mem=null;doneMem={};mediaMem={};
  const db=await mediaDb();
  if(db)await new Promise(resolve=>{const tx=db.transaction(MEDIA_STORE,'readwrite');tx.objectStore(MEDIA_STORE).clear();tx.oncomplete=()=>resolve();tx.onerror=()=>resolve();});
  put(cleanDb({v6Seen:true,aestheticProgramWeek:1,...(plan?{plan}:{})}));putDone({});
  location.reload();
}
/* Primer toque arma el botón; el segundo, en 5 s, borra. */
function armWipe(btn){
  if(btn.dataset.armed){wipeAll();return;}
  btn.dataset.armed='1';const old=btn.textContent;btn.textContent='Toca otra vez para borrar todo';btn.classList.add('armed');
  setTimeout(()=>{delete btn.dataset.armed;btn.textContent=old;btn.classList.remove('armed');},5000);
}
document.getElementById('wipeBtn').addEventListener('click',e=>armWipe(e.currentTarget));
async function v6Welcome(){
  const d=DB();if(d.v6Seen)return;
  const has=Object.keys(d.prs||{}).length||Object.keys(doneDb()).length||(d.body||[]).length||(await photoAll()).length;
  const finish=()=>{const x=DB();x.v6Seen=true;x.aestheticProgramWeek=1;put(x);week=1;rail();sesh();volume();};
  if(!has){finish();return;}
  const host=document.getElementById('v6Welcome');host.hidden=false;
  document.getElementById('v6Export').onclick=()=>document.getElementById('exp').click();
  document.getElementById('v6Wipe').onclick=e=>armWipe(e.currentTarget);
  document.getElementById('v6Keep').onclick=()=>{finish();host.hidden=true;};
}

/* ================= init ================= */
(function(){
  const d=DB();
  const returning=d.introCollapsed??(Object.keys(d.prs||{}).length>0||Object.keys(doneDb()).length>0);
  setIntro(!!returning,false);
  rail();dayTabs();sesh();volume();renderSpec();renderProgress();buildGroups();buildExList();drawChart();refreshPhotoDates();v6Welcome();
})();

let renderedDate=today();
function refreshDateBoundary(){
  const current=today();
  if(current===renderedDate)return;
  renderedDate=current;selectedCalendarDate=current;calendarCursor=new Date(keyDate(current).getFullYear(),keyDate(current).getMonth(),1,12);
  dayTabs();sesh();renderSpec();renderProgress();
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshDateBoundary()});
setInterval(refreshDateBoundary,60000);

/* ================= PWA: instalación ================= */
let deferredPrompt=null;
const installCard=document.getElementById('installCard');
const isStandalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
  if(!isStandalone)installCard.hidden=false;
});
document.getElementById('installBtn').addEventListener('click',()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.finally(()=>{deferredPrompt=null;installCard.hidden=true;});
});
window.addEventListener('appinstalled',()=>{installCard.hidden=true;});

/* ================= PWA: service worker y actualización ================= */
function showUpdate(worker){
  const bar=document.getElementById('updateBar');
  bar.hidden=false;
  document.getElementById('updateBtn').onclick=()=>{worker.postMessage({type:'SKIP_WAITING'});};
}
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js').then(reg=>{
      if(reg.waiting&&navigator.serviceWorker.controller)showUpdate(reg.waiting);
      reg.addEventListener('updatefound',()=>{
        const nw=reg.installing;
        if(!nw)return;
        nw.addEventListener('statechange',()=>{
          if(nw.state==='installed'&&navigator.serviceWorker.controller)showUpdate(nw);
        });
      });
    }).catch(()=>{});
    let reloading=false;
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(reloading)return;reloading=true;location.reload();
    });
  });
}
