const f1=()=>{
    console.log('f1');
}
const f2=()=>{
    console.log('f2');
};
 const main=()=>{
    console.log("main");
    setTimeout(f1, 5000);
    setTimeout(f2,0)  // 0 sec is also a time so it execute later
    f2();
    console.log("end");
 };
 main();