import { mkdir, rm } from "fs/promises";

//await mkdir("uploads");
//await mkdir("uploads/images");   // means make folder uploads and in it make folder images but if upload is not present than it give error
// to overcome this problem we use

await mkdir("docs/resumes/data",{recursive:true});

//await rm("docs/resumes/data",{recursive:true});   // from this data delete only here there is no use of recursive true

// to delete full folder

await rm("docs",{recursive:true});