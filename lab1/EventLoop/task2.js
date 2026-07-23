import fs from "fs/promises";
const writeData=async()=>{                       // as we use await so it is async function
    try {
        console.log("about to write.......")
        await fs.writeFile('stud.txt',"name:raman singh");
        console.log("file written");
    } catch (error) {
        console.log(error);
    }
}




const f1=()=>{
    console.log('f1');
}
const f2=()=>{
    console.log('f2');
};
const f3=()=>{
    console.log('f3');
};
 const main=()=>{
    console.log("main");
    setTimeout(f1,0);
    //setTimeout(f1, 5000);
    //setTimeout(f2,0)  // 0 sec is also a time so it execute later
   // setInterval(f2,1000)
   setImmediate(f2);      // it take setimmediate first than setTimeout
    //f2();
    process.nextTick(f3);
    writeData();       // process will come first than immediate
    console.log("end");
 };
 main();