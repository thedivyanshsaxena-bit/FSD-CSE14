import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") res.end("Home Page");
  else if (req.url === "/products" && req.method === "GET"){
    const products=[
      {
        id:1,
        name:"Mobile",
        price:10000,
      },
      {
        id:2,
        name:"Duster",
        price:100,
      }
    ];
    res.end(JSON.stringify(products));     // res.end() send only strings
  }
  else if (req.url === "/products" && req.method === "POST"){
    res.end("Add Product");
  }
  else if (req.url === "/products" && req.method === "PUT"){
    res.end("Update Product");
  }
  else if (req.url === "/products" && req.method === "DELETE"){
    res.end("Remove Product");
  }
else{
    res.statusCode = 404;
    res.end("Not Found");
}
});

server.listen(3000, () => console.log("prg11 is running"));
