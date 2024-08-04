const fs = require('fs');


// read file
const readFile = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(readFile);

// wite file
const txt = `this is about the avocado\n ${readFile}\n created At: ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', txt);
console.log('File Written!');