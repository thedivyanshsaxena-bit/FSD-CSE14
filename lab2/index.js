import { writeFile, readFile } from 'fs/promises';
/*const data= await readFile("stud.txt","utf-8");   // if we dont write await so it shows object promise as it takes some time so we have to use await
console.log(`file contents: ${data}`)*/

 //await writeFile("stud.txt","Divyansh Saxena\nrollno:78");
 //console.log("File Written")

 // if we run file by direct method than it will be created outside lab2 but if i run this file on right click on lab 2 and open integrated terminal and write node index.js than it create inside lab 2



 /*const addContent= async(fname,content)=>{
    await writeFile(fname,content);
    console.log(`${content} written in file: ${fname}`);
 };
 const readcontent= async(fname)=>{
    const data= await readFile(fname,'utf-8')           // in this whole code promise is pending
    return data;
};
 addContent("notes.txt","FS is easy in JS")
 console.log("contents\n",readcontent("notes.txt"))*/

 const addContent= async(fname,content)=>{
    await writeFile(fname,content);
    console.log(`${content} written in file: ${fname}`);
 };
 const readcontent= async(fname)=>{
    const data= await readFile(fname,'utf-8')
    return data;
};
await addContent("notes.txt","FS is easy in JS")
console.log("contents\n",await readcontent("notes.txt"))