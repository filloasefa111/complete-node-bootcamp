const fs = require("fs");

// Blocking way synchronous

// read file
// const readFile = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(readFile);

// // wite file
// const txt = `this is about the avocado\n ${readFile}\n created At: ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', txt);
// console.log('File Written!');

//non blocking or asynchronous

fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data1) => {
    console.log(data1);
    fs.readFile("./txt/append.txt", "utf-8", (err, data2) => {
      console.log(data2);

      fs.writeFile("./txt/final.txt", `${data2}\n${data1}`, "utf-8", (err) => {
        console.log("Your Data has been Written.");
      });
    });
  });
});
