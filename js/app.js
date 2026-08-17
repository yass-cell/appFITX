/* ================= almacenamiento ================= */
const KEY='gym-app-v1';
let mem=null,smode='memoria';
try{localStorage.setItem('__t','1');localStorage.removeItem('__t');smode='localStorage';}catch(e){}
function DB(){
  if(smode==='localStorage'){try{return JSON.parse(localStorage.getItem(KEY)||'{"prs":{},"bases":{}}')}catch(e){return{prs:{},bases:{}}}}
  return mem||(mem={prs:{},bases:{}});
}
function put(d){if(smode==='localStorage'){try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}}mem=d;}
const DONE_KEY='gym-done-v1';
let doneMem={};
function doneDb(){
  if(smode==='localStorage'){try{return JSON.parse(localStorage.getItem(DONE_KEY)||'{}')}catch(e){return{}}}
  return doneMem;
}
function putDone(d){if(smode==='localStorage'){try{localStorage.setItem(DONE_KEY,JSON.stringify(d))}catch(e){}}doneMem=d;}
const st=document.getElementById('store');
st.textContent=smode==='localStorage'?'ACTIVO · guardado en este dispositivo':'SOLO SESIÓN · descarga el archivo y ábrelo en Chrome';
if(smode!=='localStorage')st.classList.add('off');

/* ============ catálogo derivado de la rutina ============ */
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const EX={}; // slug -> {name, grp}
const BASIC=new Set();
DAYS.forEach(d=>d.blocks.forEach(b=>b.ex.forEach(e=>{
  if(!e.m)return;
  const id=slug(e.name);
  if(!EX[id]) EX[id]={name:e.name,grp:G[e.m]||'Otros'};
  if(e.base||b.t.indexOf('Fuerza')===0) BASIC.add(id);
})));
BASIC.forEach(id=>{ if(EX[id]) EX[id].grp='Básicos'; });
/* marcas antiguas de rutinas anteriores: se conservan en el grupo Archivo */
Object.keys(DB().prs||{}).forEach(id=>{
  if(!EX[id])EX[id]={name:id.replace(/-/g,' ').replace(/^./,c=>c.toUpperCase()),grp:'Archivo'};
});
const GROUPS=['Básicos','Pecho','Espalda','Hombro','Brazo','Pierna','Core y skills'];
if(Object.values(EX).some(e=>e.grp==='Archivo'))GROUPS.push('Archivo');

/* ================= métricas ================= */
const epley=(kg,r)=>kg*(1+r/30);
const val=e=>e.kg>0?epley(e.kg,e.r):e.r;
const fmt=n=>Math.round(n*10)/10;
const dmy=s=>{const p=s.split('-');return p[2]+'/'+p[1]};
const today=()=>new Date().toISOString().slice(0,10);
function prsOf(id){const d=DB();return (d.prs[id]||[]).slice().sort((a,b)=>a.d.localeCompare(b.d));}
function bestOf(id){const l=prsOf(id);if(!l.length)return null;let b=l[0],bv=val(l[0]);
 l.forEach(e=>{const v=val(e);if(v>bv){bv=v;b=e}});return b;}

/* ================= tabs ================= */
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('nav button').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.pane').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  document.getElementById(b.dataset.p).classList.add('on');
  if(b.dataset.p==='p-progreso'){buildExList();drawChart();}
  window.scrollTo(0,0);
}));

/* ================= rutina ================= */
let week=1,day='d1';
const bases={};
function readBases(){['bp','pu','dp','bw'].forEach(k=>bases[k]=parseFloat(document.getElementById(k).value)||0);}
function rail(){
  const el=document.getElementById('rail');el.innerHTML='';
  for(let w=1;w<=8;w++){
    const b=document.createElement('button');
    b.className='wk'+(w===week?' on':'');b.textContent=w;
    if(w===4)b.dataset.phase='deload';
    b.onclick=()=>{week=w;rail();sesh();volume()};
    el.appendChild(b);
  }
  document.getElementById('phase').textContent=PH[week].toUpperCase()+'  ·  BÁSICOS A '+SR[week];
  document.getElementById('phaseTiny').textContent='Semana '+week+' de 8';
}
function dayTabs(){
  const el=document.getElementById('days');el.innerHTML='';
  DAYS.forEach(d=>{
    const b=document.createElement('button');
    b.className='day'+(d.id===day?' on':'')+(d.wet?' wet':'')+(d.delt?' delt':'');
    b.innerHTML=`<b>${d.n}</b><s>${d.short}</s>`;
    b.onclick=()=>{day=d.id;dayTabs();sesh()};
    el.appendChild(b);
  });
}
function sesh(){
  readBases();
  const d=DAYS.find(x=>x.id===day),host=document.getElementById('sesh');
  let total=0;d.blocks.forEach(b=>total+=b.ex.length);
  const dnote=week===4?' · descarga: accesorios −40%':week===8?' · test: accesorios −30%':'';
  let h=`<div class="seshhead"><h3>${d.s}</h3><span class="tag${d.wet?' wet':''}">${d.tag}</span></div>
    <p class="seshnote">${d.note}</p>
    <p class="count">${total} ejercicios · ${d.blocks.length} bloques${dnote}</p>`;
  d.blocks.forEach((blk,bi)=>{
    h+=`<div class="blk" data-tone="${blk.tone||''}"><div class="blkhead"><h4>${blk.t}</h4><span class="rule"></span></div>`;
    blk.ex.forEach((e,ei)=>{
      const ph=e.dyn==='dragon'?DRAGON[dragonPhase(week)]:null;
      const dispName=ph?ph.name:e.name;
      const dispSets=e.base&&!e.pct?SR[week]:(ph?ph.sets:e.sets);
      const dispCue=ph?ph.cue:e.cue;
      const dispWhy=ph?ph.why:e.why;
      const id=e.m?slug(e.name):null;
      const doneId=today()+'|'+day+'|'+slug(e.name),completed=!!doneDb()[doneId];
      let loadHtml='';
      if(e.base){
        const kg=e.round(bases[e.base]*(e.pct||F[week]*(e.mult||1)));
        loadHtml=`<div class="load"><span class="kg">${kg%1?kg.toFixed(2).replace(/0$/,''):kg}</span>
          <span class="u">${e.base==='bp'?'kg barra':'kg lastre'}</span></div>`;
      }
      const best=id?bestOf(id):null;
      const prBtn=id?`<button class="prbtn${best?' has':''}" data-pr="${bi}-${ei}">
          ${best?`<b>${best.kg>0?best.kg+'×'+best.r:best.r}</b>marca`:`<b>+</b>marca`}</button>`:'';
      const doneBtn=`<button class="donebtn${completed?' on':''}" data-done="${doneId}" aria-pressed="${completed}">
          <b>${completed?'✓':'○'}</b>${completed?'hecho':'hacer'}</button>`;
      h+=`<div class="ex${completed?' done':''}"><div class="exrow">
        <div class="dia">${DIA[e.d]}<small>${e.move||''}</small></div>
        <div class="exbody">
          <p class="exname">${dispName}</p>
          <p class="exmeta">${dispSets}</p>${loadHtml}
          <p class="cue">${dispCue}</p>
          ${dispWhy?`<p class="why">↳ ${dispWhy}</p>`:''}
        </div><div class="exactions">${doneBtn}${prBtn}</div></div>
        ${id?`<div class="prform" id="prf-${bi}-${ei}">
          <div class="r">
            <div><p class="lbl">Kg / lastre</p><input type="number" inputmode="decimal" step="0.5" min="0" id="kg-${bi}-${ei}" placeholder="0"></div>
            <div><p class="lbl">Reps o seg</p><input type="number" inputmode="numeric" step="1" min="1" id="rp-${bi}-${ei}" placeholder="5"></div>
            <button class="btn" data-save="${bi}-${ei}" data-id="${id}">OK</button>
          </div>
          ${best?`<p class="prlast">Tu mejor: <b>${best.kg>0?best.kg+' kg × '+best.r:best.r}</b> (${dmy(best.d)})${best.kg>0?' · 1RM est. '+fmt(epley(best.kg,best.r))+' kg':''}</p>`:''}
        </div>`:''}
      </div>`;
    });
    h+='</div>';
  });
  host.innerHTML=h;
  host.querySelectorAll('[data-done]').forEach(b=>b.addEventListener('click',()=>{
    const d=doneDb(),id=b.dataset.done;
    if(d[id])delete d[id];else d[id]=true;
    putDone(d);sesh();
  }));
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
    put(d); sesh();
  }));
}
['bp','pu','dp','bw'].forEach(k=>{
  const el=document.getElementById(k);
  el.addEventListener('input',()=>{
    const d=DB(); d.bases=d.bases||{}; d.bases[k]=el.value; put(d); sesh();
  });
});

/* ================= series por semana ================= */
const nsets=s=>{const m=String(s).match(/^\s*(\d+)\s*[×x]/);return m?parseInt(m[1]):0};
function volume(){
  const tot={};
  DAYS.forEach(d=>d.blocks.forEach(b=>b.ex.forEach(e=>{
    if(!e.m)return;
    let s=e.base&&!e.pct?nsets(SR[week]):nsets(e.sets);
    if(week===4&&!(e.base&&!e.pct))s=Math.max(0,Math.round(s*.6));
    if(week===8&&!(e.base&&!e.pct))s=Math.max(0,Math.round(s*.7));
    tot[e.m]=(tot[e.m]||0)+s;
  })));
  const order=['dl','dpo','da','pec','esp','bi','tri','pie','ham','ere','cal','core'];
  const max=Math.max(...order.map(k=>tot[k]||0))||1;
  document.getElementById('volwk').textContent='Semana '+week;
  document.getElementById('vrows').innerHTML=order.map(k=>{
    const v=tot[k]||0,key=(k==='dl'||k==='dpo');
    return `<div class="vrow${key?' key':''}"><span class="vname">${MUS[k]}</span>
      <span class="vbar"><i style="width:${Math.round(v/max*100)}%"></i></span>
      <span class="vnum">${v}</span></div>`;
  }).join('');
}

/* ================= progreso ================= */
const COLORS=['#FF6B35','#2FC2D6','#7B5CFF','#C9A227','#5FD68B','#E5484D','#EEF4F3'];
let grp='Básicos', sel=new Set(['press-banca','dominada-lastrada','fondos-lastrados']);
let plotKg=true,plotReps=true;
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
function drawChart(){
  const host=document.getElementById('chartHost'),leg=document.getElementById('legend'),
        cap=document.getElementById('cap'),tbl=document.getElementById('prtable');
  const series=[...sel].map(id=>({id,name:EX[id]?EX[id].name:id,list:prsOf(id)}))
    .filter(s=>s.list.length>0);
  leg.innerHTML='';cap.textContent='';
  if(!series.length){
    host.innerHTML='<p class="empty">Selecciona ejercicios con registros.<br>Las marcas se anotan desde la pestaña Rutina, con el botón de cada ejercicio.</p>';
    tbl.innerHTML='';return;
  }
  const mode=plotKg&&plotReps?'scatter':plotKg?'kg':'reps';
  const W=700,H=260,L=48,R=12,T=14,B=30;
  let allX=[],allY=[];
  series.forEach(s=>{
    s.pts=s.list.map(e=>({x:mode==='scatter'?e.r:new Date(e.d).getTime(),y:mode==='reps'?e.r:e.kg,e}));
    allX.push(...s.pts.map(p=>p.x));allY.push(...s.pts.map(p=>p.y));
  });
  let x0=Math.min(...allX),x1=Math.max(...allX);
  let y0=Math.min(...allY),y1=Math.max(...allY);
  if(mode==='scatter'){
    const xpad=(x1-x0)*.08||1;x0=Math.max(0,x0-xpad);x1+=xpad;
  }
  const pad=(y1-y0)*0.15||Math.max(Math.abs(y1)*0.1,1);y0-=pad;y1+=pad;
  y0=Math.max(0,y0);
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
  cap.textContent=mode==='scatter'?'Eje X: repeticiones · Eje Y: kg reales · toca un punto':
    mode==='kg'?'Eje X: tiempo · Eje Y: kg reales · toca un punto':'Eje X: tiempo · Eje Y: repeticiones/segundos · toca un punto';
  host.querySelectorAll('circle').forEach(c=>c.addEventListener('click',()=>{
    const s=series[+c.dataset.s],p=s.pts[+c.dataset.p],e=p.e;
    cap.textContent=s.name+' · '+dmy(e.d)+' · '+(e.kg>0?e.kg+' kg × '+e.r:e.r+' reps/s');
  }));
  /* tabla de historial de lo seleccionado */
  tbl.innerHTML=series.map((s,si)=>{
    let best=-Infinity;
    const marks=s.list.map(e=>{const v=val(e);const p=v>best;if(p)best=v;return p});
    return `<h3 style="font-family:Anton,sans-serif;font-weight:400;font-size:15px;letter-spacing:.05em;text-transform:uppercase;margin:18px 0 2px;color:${COLORS[si%COLORS.length]}">${s.name}</h3>`+
      s.list.slice().reverse().map((e,ri)=>{
        const i=s.list.length-1-ri;
        return `<div class="hrow"><span class="hd">${dmy(e.d)}</span>
          <span class="hv">${e.kg>0?e.kg+' kg × '+e.r:e.r}</span>
          ${marks[i]?'<span class="prb">PR</span>':''}
          <span class="he">${e.kg>0?fmt(epley(e.kg,e.r))+' kg':''}</span>
          <button class="del" data-id="${s.id}" data-d="${e.d}">×</button></div>`;
      }).join('');
  }).join('');
  tbl.querySelectorAll('.del').forEach(b=>b.addEventListener('click',()=>{
    const d=DB();d.prs[b.dataset.id]=(d.prs[b.dataset.id]||[]).filter(x=>x.d!==b.dataset.d);
    if(!d.prs[b.dataset.id].length)delete d.prs[b.dataset.id];
    put(d);buildExList();drawChart();
  }));
}

function syncPlotMode(){
  const kg=document.getElementById('plotKg'),reps=document.getElementById('plotReps');
  kg.classList.toggle('on',plotKg);kg.setAttribute('aria-pressed',plotKg);
  reps.classList.toggle('on',plotReps);reps.setAttribute('aria-pressed',plotReps);
  drawChart();
}
document.getElementById('plotKg').addEventListener('click',()=>{
  if(plotKg&&!plotReps)return;
  plotKg=!plotKg;syncPlotMode();
});
document.getElementById('plotReps').addEventListener('click',()=>{
  if(plotReps&&!plotKg)return;
  plotReps=!plotReps;syncPlotMode();
});

/* ================= datos ================= */
document.getElementById('exp').addEventListener('click',()=>{
  const blob=new Blob([JSON.stringify({version:1,...DB()},null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='fuerza-'+today()+'.json';a.click();URL.revokeObjectURL(a.href);
});
document.getElementById('imp').addEventListener('click',()=>document.getElementById('file').click());
document.getElementById('file').addEventListener('change',ev=>{
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=()=>{
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
      put(cur);sesh();buildExList();drawChart();
      alert('Copia importada y fusionada.');
    }catch(e){alert('Ese archivo no tiene el formato esperado.');}
  };
  rd.readAsText(f);
});

/* ================= init ================= */
(function(){
  const d=DB();
  if(d.bases)['bp','pu','dp','bw'].forEach(k=>{if(d.bases[k])document.getElementById(k).value=d.bases[k];});
  rail();dayTabs();sesh();volume();buildGroups();buildExList();drawChart();
})();

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
