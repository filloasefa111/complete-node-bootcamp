const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "text/html",
      "write-Own-header": "simple webserver",
    });
    res.end(data);
  }
});

server.listen(8000, () => {
  console.log("server running ...");
});
