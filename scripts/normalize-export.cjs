// Next 16.2 on Windows leaves backslashes in exported segment names.
// Supply the flat filenames the browser requests without modifying/removing originals.
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve('out');
function walk(directory){return fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(directory,entry.name)):[path.join(directory,entry.name)]);}
let added=0;
for(const file of walk(root)) {
 const parts=path.relative(root,file).split(path.sep);
 const start=parts.findIndex(part=>part.startsWith('__next.'));
 if(start<0 || start===parts.length-1 || !file.endsWith('.txt'))continue;
 const target=path.join(root,...parts.slice(0,start),parts.slice(start).join('.'));
 if(fs.existsSync(target)) {
  if(!fs.readFileSync(file).equals(fs.readFileSync(target)))throw new Error('Conflicting export segment: '+target);
 } else {fs.copyFileSync(file,target,fs.constants.COPYFILE_EXCL);added++;}
}
console.log('Static export segment filenames: '+added+' Windows aliases added.');
