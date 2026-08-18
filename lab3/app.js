import http from "http";
const server=http.createServer();
server.on('request',(req,res)=>{
    res.write("Welcome To Server Side Programming");
    res.end();
});

server.listen(5000,()=>{
    console.log("Server Is Running")
});