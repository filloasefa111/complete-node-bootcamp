const http = require('http');



const server = http.createServer((req, res) => {
    res.end("Hello this from web server!");
})

server.listen(8000, () => {
    console.log('server running ....')
})