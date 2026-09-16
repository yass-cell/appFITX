const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'../js/app.js'),'utf8');
const backupCode=source.slice(source.indexOf('async function completeBackup(){'),source.indexOf('/* ================= init ================= */'));
function app(data={prs:{},bases:{},body:[]},done={},photos=[]){
 const elements=new Map(),images=new Map(photos.map(p=>[p.d,p]));
 let readerDone;
 const el=id=>{if(!elements.has(id))elements.set(id,{listeners:{},addEventListener(k,fn){this.listeners[k]=fn;}});return elements.get(id);};
 const ctx=vm.createContext({document:{getElementById:el},DB:()=>data,put:d=>{data=d;},doneDb:()=>done,putDone:d=>{done=d;},photoAll:async()=>[...images.values()],photoPut:async p=>images.set(p.d,p),
  FileReader:class{readAsText(file){this.result=file.text;readerDone=this.onload();}},
  week:1,rail(){},dayTabs(){},sesh(){},volume(){},buildExList(){},drawChart(){},refreshPhotoDates:async()=>{},renderProgress(){},alert:message=>{if(message.startsWith('Ese archivo'))throw Error(message);}});
 vm.runInContext(backupCode,ctx);
 return {backup:async()=>JSON.parse(JSON.stringify(await vm.runInContext('completeBackup()',ctx))),
  import:async copy=>{el('file').listeners.change({target:{files:[{text:JSON.stringify(copy)}],value:'backup.json'}});await readerDone;},week:()=>ctx.week};
}
const record={d:'2026-01-02',kg:20,r:8};
const sample={version:2,prs:{exercise:[record]},bases:{example:20},body:[{d:record.d,weight:70}],aestheticProgramWeek:5,done:{'2026-01-02|old-day|exercise':true},photos:[{d:record.d,data:'data:image/png;base64,dGVzdA=='}]};
test('una copia completa restaura marcas, casillas, medidas, fotos y semana en otro navegador',async()=>{
 const origin=app({...sample},sample.done,sample.photos),copy=await origin.backup(),destination=app();
 await destination.import(copy);
 assert.deepEqual(await destination.backup(),copy);
 assert.equal(destination.week(),5);
});
test('importar conserva registros de otras fechas y la semana ya elegida en el destino',async()=>{
 const existingDate='2026-01-01',existingPhoto={d:existingDate,data:'data:image/png;base64,b2xk'};
 const destination=app({prs:{exercise:[{...record,d:existingDate}]},bases:{other:10},body:[{d:existingDate,weight:71}],aestheticProgramWeek:3},{old:true},[existingPhoto]);
 await destination.import(sample);const result=await destination.backup();
 assert.equal(result.prs.exercise.length,2);assert.equal(result.body.length,2);assert.equal(result.photos.length,2);
 assert.equal(result.done.old,true);assert.equal(result.done[Object.keys(sample.done)[0]],true);
 assert.equal(result.bases.other,10);assert.equal(result.bases.example,20);assert.equal(destination.week(),3);
});
