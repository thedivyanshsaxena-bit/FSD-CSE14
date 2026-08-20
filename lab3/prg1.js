import http from "http";
const server = http.createServer((req, res) => {
  console.log("Welcome To Node JS");
  console.log(req.url);     // tell which url is requested by the client
  console.log("Request Method"); 
  console.log(req.method);  // tell which method is used by the client to send the request
  console.log("Request Header");
  console.log(req.headers); // tell which header is used by the client to send the request
  console.log("Socket Information");
 // console.log(req.socket);
 console.log(req.headers.host);
  res.end("Hello")
});
const PORT = 4444;
server.listen(PORT, () => {
  console.log("Server Is Running.......");
});

