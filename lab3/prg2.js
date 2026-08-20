import http from "http";
const server = http.createServer((req, res) => {
    /*res.writeHead(404,{
        'content-type':"text/plain",
    })*/
   res.writeHead(201,{
        'content-type':"text/plain",
    })
    res.end("<h1>Welcome To Server</h1>");
});
const PORT = 4444;
server.listen(PORT, () => {
  console.log("Server Is Running.......");
});