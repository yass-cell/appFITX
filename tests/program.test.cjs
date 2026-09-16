const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
function setup(){
 const done={};const c={doneDb:()=>done,allPrEvents:()=>[]};vm.createContext(c);
 for(const p of ['js/data.js','js/program-history.js','js/program.js','js/exercise-art.js'])vm.runInContext(read(p),c,{filename:p});
 const app=read('js/app.js');
 vm.runInContext(app.slice(app.indexOf('const slug='),app.indexOf('const EX='))+app.slice(app.indexOf('const dateKey='),app.indexOf('function prsOf'))+app.slice(app.indexOf('function doneIndex(){'),app.indexOf('function bodyRecords(){')),c);
 vm.runInContext('globalThis.r={DAYS,TRAINING_DAYS,LEGACY_DAYS,PREVIOUS_PROGRAM_DAYS,PREVIOUS_TORSO_DAYS,PREVIOUS_CHEST_DAYS,HISTORY_DAYS,exerciseSets,cardioMinutes,ExerciseArt,requiredExercises,weekDates,weekSummaryFor,dateActivity,fullWeekStreak};',c);
 return {...c.r,done};
}
test('cinco sesiones y dos descansos sin tareas obligatorias',()=>{
 const r=setup();assert.equal(r.DAYS.length,7);assert.equal(r.TRAINING_DAYS.length,5);
 assert.deepEqual(Array.from(r.DAYS.filter(d=>d.rest),d=>d.n),['Miércoles','Domingo']);
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
 assert.equal(new Set(r.HISTORY_DAYS.map(d=>d.id)).size,30);
});
test('dos días de pecho y espalda, una pierna y tres dosis de lateral y brazos',()=>{
 const {TRAINING_DAYS}=setup();
 for(const [m,count] of [['pec',2],['esp',2],['pie',1],['ham',1],['dl',3],['bi',3],['tri',3],['core',3]])assert.equal(TRAINING_DAYS.filter(d=>d.blocks.some(b=>b.ex.some(e=>e.m===m))).length,count,m);
 const exercises=TRAINING_DAYS.flatMap(d=>d.blocks.flatMap(b=>b.ex));
 for(const icon of ['pull','dip','latp','rowdb','incl','rowc','rowhigh','fly','rowbar','pullover','straightarm','bench','chestpress'])assert.ok(exercises.some(e=>e.d===icon),icon);
 for(const d of TRAINING_DAYS){const icons=d.blocks.flatMap(b=>b.ex.map(e=>e.d));assert.ok(!(icons.includes('pull')&&icons.includes('latp')),'No duplicar dominadas y jalón en la misma sesión');}
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
  for(const phase of [0,1])assert.doesNotMatch(r.ExerciseArt.svg(e.d,phase),/undefined|NaN/);
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
 for(const [m,n] of Object.entries({pec:15,esp:17,dl:9,dpo:6,bi:8,tri:8,core:8}))assert.equal(totals[m],n,m);
 for(const d of r.DAYS.filter(d=>d.rest)){
  assert.ok(d.blocks.some(b=>b.ex.some(e=>e.cardio!==undefined)));
  assert.ok(d.blocks.some(b=>/Movilidad/.test(b.t)));
  assert.ok(d.blocks.some(b=>/Estiramientos/.test(b.t)));
  assert.ok(d.blocks.some(b=>/Tolerancia.*opcional/.test(b.t)));
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

test('banca progresa como básico; pecho se reparte en 7 y 8 series',()=>{
 const r=setup(),monday=r.DAYS[0],friday=r.DAYS[4];
 const chest=d=>d.blocks.flatMap(b=>b.ex).filter(e=>e.m==='pec');
 const bench=chest(monday)[0];assert.equal(bench.name,'Press banca');assert.equal(bench.strength,true);
 assert.equal(r.exerciseSets(bench,1),'3 × 4-6');assert.equal(r.exerciseSets(bench,4),'2 × 4-5');
 assert.equal(chest(monday).reduce((n,e)=>n+parseInt(r.exerciseSets(e,1)),0),7);
 assert.equal(chest(friday).reduce((n,e)=>n+parseInt(r.exerciseSets(e,1)),0),8);
 assert.equal(chest(friday)[0].d,'chestpress');assert.ok(chest(friday).some(e=>e.d==='dip'));
});
