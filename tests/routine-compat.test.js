const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

const root=path.resolve(__dirname,'..');
const dataSource=fs.readFileSync(path.join(root,'js','data.js'),'utf8');
const appSource=fs.readFileSync(path.join(root,'js','app.js'),'utf8');
const context={};
vm.createContext(context);
vm.runInContext(`${dataSource}\n;globalThis.__routine={DAYS};`,context);

const {DAYS}=context.__routine;
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const doneId=e=>e.doneAs||slug(e.name);
const required=d=>d.blocks.flatMap(b=>/opcional/i.test(b.t)?[]:b.ex.filter(e=>!/opcional/i.test(e.sets||'')).map(doneId));
const exercise=(dayId,name)=>DAYS.find(d=>d.id===dayId).blocks.flatMap(b=>b.ex).find(e=>e.name===name);

test('los almacenes persistentes conservan sus claves',()=>{
  assert.match(appSource,/const KEY='gym-app-v1'/);
  assert.match(appSource,/const DONE_KEY='gym-done-v1'/);
  assert.match(appSource,/const MEDIA_DB='gym-media-v1'/);
});

test('el total semanal de casillas obligatorias sigue siendo 46',()=>{
  assert.equal(DAYS.reduce((total,d)=>total+required(d).length,0),46);
});

test('las casillas antiguas completan los nuevos ejercicios sustitutos',()=>{
  assert.equal(doneId(exercise('d4','Crunch en polea o máquina abdominal')),'elevacion-de-piernas-tumbado');
  assert.equal(doneId(exercise('d7','Crunch declinado lastrado')),'dragon-flag');
});

test('el dragon opcional no interfiere con la casilla obligatoria histórica',()=>{
  const dragon=exercise('d7','Dragon flag');
  assert.equal(doneId(dragon),'dragon-flag-skill');
  assert.ok(!required(DAYS.find(d=>d.id==='d7')).includes(doneId(dragon)));
});
