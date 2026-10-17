const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
function setup(){
 const done={};const c={doneDb:()=>done,allPrEvents:()=>[]};vm.createContext(c);
 for(const p of ['js/data.js','js/program-history.js','js/program.js','js/exercise-art.js'])vm.runInContext(read(p),c,{filename:p});
 const app=read('js/app.js');
 vm.runInContext(app.slice(app.indexOf('const slug='),app.indexOf('const EX='))+app.slice(app.indexOf('const fmt='),app.indexOf('function prsOf'))+app.slice(app.indexOf('const markText='),app.indexOf('/* Descanso indicado'))+app.slice(app.indexOf('function doneIndex(){'),app.indexOf('function bodyRecords(){')),c);
 vm.runInContext('globalThis.r={DAYS,TRAINING_DAYS,LEGACY_DAYS,PREVIOUS_PROGRAM_DAYS,PREVIOUS_TORSO_DAYS,PREVIOUS_CHEST_DAYS,PREVIOUS_V5_DAYS,HISTORY_DAYS,exerciseSets,cardioMinutes,ExerciseArt,todayTarget,WEEK_FOCUS,requiredExercises,weekDates,weekSummaryFor,dateActivity,fullWeekStreak};',c);
 return {...c.r,done};
}
test('cinco sesiones y dos descansos sin tareas obligatorias',()=>{
 const r=setup();assert.equal(r.DAYS.length,7);assert.equal(r.TRAINING_DAYS.length,5);
 assert.deepEqual(Array.from(r.DAYS.filter(d=>d.rest),d=>d.n),['Jueves','Domingo']);
 for(const d of r.DAYS.filter(d=>d.rest))assert.equal(r.requiredExercises(d).length,0);
});
test('cinco sesiones completan la semana y la racha sin marcar descansos ni skills',()=>{
 const r=setup(),dates=r.weekDates();
 for(const d of r.TRAINING_DAYS)for(const id of r.requiredExercises(d))r.done[dates[r.DAYS.indexOf(d)]+'|'+d.id+'|'+id]=true;
 assert.equal(r.weekSummaryFor().days,5);assert.equal(r.fullWeekStreak(),1);
 assert.equal(r.weekSummaryFor().exercises,r.weekSummaryFor().total);
});
test('el historial anterior sigue visible y no completa sesiones del nuevo programa',()=>{
 const r=setup(),date=r.weekDates()[0],legacy=r.LEGACY_DAYS[0];
 for(const id of r.requiredExercises(legacy))r.done[date+'|'+legacy.id+'|'+id]=true;
 assert.equal(r.dateActivity(date).sessions.length,1);assert.equal(r.dateActivity(date).sessions[0].day.id,'d1');
 assert.equal(r.weekSummaryFor().days,0);assert.equal(r.weekSummaryFor().exercises,0);
 assert.equal(new Set(r.HISTORY_DAYS.map(d=>d.id)).size,37);
});
test('reparto V7: calistenia 2×, pecho y espalda 2×, hombro 4 días, brazo y core 3, pierna 1',()=>{
 const {TRAINING_DAYS}=setup();
 const req=d=>d.blocks.filter(b=>!/opcional/i.test(b.t)).flatMap(b=>b.ex);
 const days=test=>TRAINING_DAYS.filter(d=>req(d).some(test)).length;
 for(const [ms,count] of [[['pec'],2],[['esp'],2],[['pie'],1],[['ham'],1],[['dl','da','dpo'],4],[['bi'],3],[['tri'],3],[['core'],3],[['ant'],2]])assert.equal(days(e=>ms.includes(e.m)),count,ms.join('+'));
 assert.equal(days(e=>e.d==='pull'),2,'dominadas dos días');
 assert.equal(days(e=>e.d==='dip'),2,'fondos dos días');
 const names=TRAINING_DAYS.flatMap(req).map(e=>e.name);
 for(const fav of ['Jalón al pecho','Remo con barra','Remo con mancuerna a una mano','Press banca','Press inclinado con mancuernas','Dominada lastrada','Fondos lastrados','L-sit en paralelas','Aperturas con mancuernas','Y-raise en polea','Press militar con barra','Press francés con barra EZ','Curl inverso con barra EZ','Curl martillo'])assert.ok(names.includes(fav),fav);
 for(const d of TRAINING_DAYS){const icons=req(d).map(e=>e.d);assert.ok(!(icons.includes('preacher')&&icons.includes('curlc')),'predicador y curl en polea no coinciden: '+d.n);}
});
test('descarga reduce las series mostradas; cardio progresa con una descarga real',()=>{
 const r=setup();
 for(const d of r.TRAINING_DAYS)for(const b of d.blocks)for(const e of b.ex){
  if(!e.m||/opcional/i.test(b.t))continue;
  assert.ok(parseInt(r.exerciseSets(e,4))<parseInt(r.exerciseSets(e,1)),e.name);
 }
 const sums=Object.values(r.cardioMinutes).map(a=>a.reduce((x,y)=>x+y,0));
 assert.deepEqual(sums,[70,75,85,60,85,95,100,105]);
 for(let w=1;w<=8;w++)for(const d of r.DAYS)for(const b of d.blocks)for(const e of b.ex)assert.ok(r.exerciseSets(e,w),e.name);
});
test('todos los ejercicios tienen dos dibujos específicos, sin números inválidos',()=>{
 const r=setup();
 for(const d of r.DAYS)for(const b of d.blocks)for(const e of b.ex){
  assert.ok(r.ExerciseArt.specs[e.d],e.name);
  for(const phase of [0,1,'combo'])assert.doesNotMatch(r.ExerciseArt.svg(e.d,phase),/undefined|NaN/);
 }
});
test('la PWA precarga los nuevos archivos y el HTML portátil integra sus recursos',()=>{
 const sw=read('sw.js'),html=read('fuerza-app.html');
 for(const file of ['js/program-history.js','js/program.js','js/exercise-art.js'])assert.ok(sw.includes(file));
 assert.ok(html.includes('const TRAINING_DAYS='));
 assert.doesNotMatch(html,/<script src=|<link rel="stylesheet"/);
 assert.ok(html.includes('data:font/woff2;base64,'));
 for(const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g))assert.doesNotThrow(()=>new vm.Script(script[1]));
});

test('el calendario conserva también las sesiones del programa 5+2 anterior',()=>{
 const r=setup(),date=r.weekDates()[1],previous=r.PREVIOUS_PROGRAM_DAYS[1];
 for(const id of r.requiredExercises(previous))r.done[date+'|'+previous.id+'|'+id]=true;
 assert.equal(r.dateActivity(date).sessions[0].day.id,'v2-d2');assert.equal(r.dateActivity(date).sessions[0].complete,true);
 assert.equal(r.weekSummaryFor().days,0);
});
test('volumen de prioridades y caminatas de recuperación coherentes',()=>{
 const r=setup(),totals={};
 for(const d of r.TRAINING_DAYS)for(const b of d.blocks)for(const e of b.ex)if(e.m)totals[e.m]=(totals[e.m]||0)+parseInt(r.exerciseSets(e,1));
  for(const d of r.TRAINING_DAYS)for(const b of d.blocks)if(/opcional/i.test(b.t))for(const e of b.ex)if(e.m)totals[e.m]-=parseInt(r.exerciseSets(e,1));
 for(const [m,n] of Object.entries({pec:18,esp:20,dl:10,da:4,dpo:6,bi:12,tri:9,ant:8,core:9,pie:10,ham:6,cal:3}))assert.equal(totals[m],n,m);
 for(const d of r.DAYS.filter(d=>d.rest)){
  assert.ok(d.blocks.some(b=>b.ex.some(e=>e.cardio!==undefined)));
  assert.ok(d.blocks.some(b=>/Cadera/.test(b.t)),'movilidad de cadera');
  assert.ok(d.blocks.some(b=>/Core/.test(b.t)),'core ligero');
  assert.equal(d.s,'Movilidad de cadera + core');
 }
});

test('V3 conserva completas las sesiones anteriores a los nuevos accesorios',()=>{
 const r=setup(),date=r.weekDates()[0],previous=r.PREVIOUS_TORSO_DAYS[0];
 for(const id of r.requiredExercises(previous))r.done[date+'|'+previous.id+'|'+id]=true;
 const session=r.dateActivity(date).sessions[0];
 assert.equal(session.day.id,'v3-d1');assert.equal(session.complete,true);assert.equal(r.weekSummaryFor().days,0);
});

test('los días de pecho V4 conservan su historial tras redistribuir los presses',()=>{
 const r=setup(),dates=r.weekDates();
 for(const previous of r.PREVIOUS_CHEST_DAYS){
  const date=dates[previous.n==='Lunes'?0:4];
  for(const id of r.requiredExercises(previous))r.done[date+'|'+previous.id+'|'+id]=true;
  const session=r.dateActivity(date).sessions.find(s=>s.day.id===previous.id);
  assert.equal(session.complete,true);
 }
 assert.equal(r.weekSummaryFor().days,0);
});

test('fuerza: cinco básicos con serie top y semanas alternas de reps y kg',()=>{
 const r=setup(),all=r.TRAINING_DAYS.flatMap(d=>d.blocks.flatMap(b=>b.ex));
 const strength=all.filter(e=>e.strength);
 assert.deepEqual(Array.from(strength,e=>e.name),['Press banca','Dominada lastrada','Prensa de pierna horizontal','Press militar con barra','Remo con barra']);
 for(const e of strength){
  assert.match(r.exerciseSets(e,1),/^4 × 6-8 · top RPE 7/);assert.match(r.exerciseSets(e,4),/^2 × 5 · descarga/);assert.match(r.exerciseSets(e,8),/RIR 1/);
  assert.match(e.cue,/Descansa 3 min\.$/);
 }
 assert.deepEqual(Object.values(r.WEEK_FOCUS),['reps','kg','reps','deload','kg','reps','kg','test']);
});

test('objetivo de hoy: semana de reps suma una rep, semana de kg sube un salto',()=>{
 const r=setup(),all=r.TRAINING_DAYS.flatMap(d=>d.blocks.flatMap(b=>b.ex));
 const incl=all.find(e=>e.name==='Press inclinado con mancuernas'),bench=all.find(e=>e.name==='Press banca'),pull=all.find(e=>e.name==='Dominada lastrada');
 const t=(e,last,w)=>{const x=r.todayTarget(e,{d:'2026-01-01',...last},w);return x&&[x.kg,x.r,x.backoff||0]};
 assert.deepEqual(t(incl,{kg:28,r:10},1),[28,11,0],'reps: misma carga, +1');
 assert.deepEqual(t(incl,{kg:28,r:12},3),[28,12,0],'reps en el tope: mantiene');
 assert.deepEqual(t(incl,{kg:28,r:10},2),[30,8,0],'kg: mancuernas +2, al mínimo del rango');
 assert.deepEqual(t(incl,{kg:28,r:6},2),[28,8,0],'kg sin reps suficientes: consolida');
 assert.deepEqual(t(incl,{kg:28,r:10},4),[26,8,0],'descarga: −10 % redondeado al salto');
 assert.deepEqual(t(bench,{kg:80,r:6},2),[82.5,5,75],'básico kg: +2,5 y back-off');
 assert.deepEqual(t(bench,{kg:80,r:6},1),[80,7,72.5],'básico reps: misma top, +1');
 assert.deepEqual(t(pull,{kg:-10,r:6},2),[-7.5,5,0],'asistencia: menos asistencia');
 assert.equal(r.todayTarget(incl,null,1),null,'sin marca no hay objetivo');
});

test('superseries: cada par va seguido en el mismo bloque y el descanso está en el segundo',()=>{
 const r=setup();
 const rest=e=>[...e.cue.matchAll(/(\d+)(?:\s*-\s*(\d+))?\s*(min|s)\b/g)].some(m=>+m[1]*(m[3]==='min'?60:1)>=30);
 let pairs=0;
 for(const d of r.TRAINING_DAYS)for(const b of d.blocks)b.ex.forEach((e,i)=>{
  if(!e.pair)return;
  if(e.pair.endsWith('1')){const next=b.ex[i+1];assert.ok(next&&next.pair===e.pair[0]+'2',e.name);assert.ok(!rest(e),'sin descanso en '+e.name);pairs++;}
  else assert.ok(rest(e),'descanso en '+e.name);
 });
 assert.equal(pairs,7);
});

test('los bloques opcionales no cuentan para completar el día',()=>{
 const r=setup();
 for(const d of r.TRAINING_DAYS)assert.equal(r.requiredExercises(d).length,d.blocks.filter(b=>!/opcional/i.test(b.t)).flatMap(b=>b.ex).length,d.n);
 for(const d of r.DAYS.filter(x=>x.rest)){assert.ok(d.blocks.some(b=>/Dominadas · práctica opcional/.test(b.t)),'práctica de dominadas opcional: '+d.n);assert.equal(r.requiredExercises(d).length,0);}
});
test('la semana V5 publicada sigue completa en el calendario',()=>{
 const r=setup(),dates=r.weekDates();
 assert.deepEqual(Array.from(r.PREVIOUS_V5_DAYS,d=>d.id),['v5-d1','v4-d2','v4-d3','v4-d4','v5-d5','v4-d6','v4-d7']);
 for(const [i,previous] of r.PREVIOUS_V5_DAYS.entries()){
  if(previous.rest)continue;
  for(const id of r.requiredExercises(previous))r.done[dates[i]+'|'+previous.id+'|'+id]=true;
  assert.equal(r.dateActivity(dates[i]).sessions.find(s=>s.day.id===previous.id).complete,true,previous.id);
 }
 assert.equal(r.weekSummaryFor().days,0);
});

test('los dibujos mantienen la longitud de los huesos entre posiciones',()=>{
 const r=setup(),d=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
 const used=new Set(r.DAYS.flatMap(x=>x.blocks.flatMap(b=>b.ex.map(e=>e.d))));
 for(const key of used){
  const {sp,A,B}=r.ExerciseArt.frames(key);
  const bones=[['S','hip'],['S','head'],['hp1','knee'],['knee','foot'],['hp2','knee2'],['knee2','foot2']];
  if(!sp.fore)bones.push(['sh1','elbow'],['elbow','hand'],['sh2','elbow2'],['elbow2','hand2']);
  for(const [x,y] of bones)assert.ok(Math.abs(d(A[x],A[y])-d(B[x],B[y]))<.6,key+' '+x+'-'+y);
 }
});
