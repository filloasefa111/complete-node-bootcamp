const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is Over View");
  } else if (pathName === "/product") {
    res.end("This is Product Page");
  } else if (pathName === "/category") {
    res.end("This is Category Page");
  } else {
    res.writeHead(404, {
        'content-type': "text/html",
        'my-Own-header': "hello world"
    })
    res.end(<h1>"Page not found, 404"</h1>);
  }
});
server.listen(8000, () => {
  console.log("Server running...");
});
 