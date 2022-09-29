const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("<h1>hello world</h1>")
    }

    if(req.url === "/home"){
        res.end("<h1>hallo home</h1>")

    }
});

const PORT = 5000;
server.listen(PORT, ()=>{console.log(`der server läuft auf port ${PORT}`)})