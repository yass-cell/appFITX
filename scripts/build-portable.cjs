const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
let html=read('index.html').replace(/<link rel="manifest"[^>]*>\s*/,'');
html=html.replace(/<link rel="stylesheet" href="\.\/([^\"]+)">/g,(_,file)=>{
 const css=read(file).replace(/url\(['"]?\.\.\/fonts\/([^)'"\s]+)['"]?\)/g,(_,font)=>`url(data:font/woff2;base64,${fs.readFileSync(path.join(root,'fonts',font)).toString('base64')})`);
 return '<style>'+css+'</style>';
});
html=html.replace(/<script src="\.\/([^\"]+)"><\/script>/g,(_,file)=>{
 let source=read(file);
 if(file==='js/app.js')source=source.replace("if('serviceWorker' in navigator){","if(false){");
 return '<script>'+source.replace(/<\/script/gi,'<\\/script')+'</script>';
});
html=html.replace(/href="\.\/icons\/([^\"]+)"/g,(_,file)=>`href="data:image/png;base64,${fs.readFileSync(path.join(root,'icons',file)).toString('base64')}"`);
fs.writeFileSync(path.join(root,'fuerza-app.html'),html);
console.log('fuerza-app.html generado con estilos, fuentes y dibujos integrados.');
