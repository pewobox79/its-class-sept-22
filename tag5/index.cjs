const http = require('http');
const fs = require('fs');
const path = require('path');


//create server
const server = http.createServer((req, res)=>{


    //generate file path
    const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)

    //extension name 
    let extname = path.extname(filePath);

    //initalisieren Content-type
    let contentType = 'text/html';
    //welcher der content type variationen ist gesetzt
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        
    }

    fs.readFile(filePath, (err, content)=>{
    
        //check grundsätzlich den error
    if(err){
        //check welche art von error
        if(err.code == 'ENOENT'){
            //check ob der error keine datei fand
            fs.readFile(path.join(__dirname, "public", "404.html"), (err, content)=>{
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(content);
            })

        }else{
            //jede andere art von error 
           res.end(`server error : ${err}`);

        }
    }else{
        //hier kommt dann der output
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf-8');

    }
    });

    //falls ich eine api aufrufe 
    if(req.url == "/api/users"){

        const users=[
            {name: "peter", age: 43},
            {name: "klaus", age: 55}
        ]

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
        
    }

/*
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)


        })
    }

    if(req.url === "/about"){
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)

        })
    }

    */

})


const PORT = 4000;
server.listen(PORT, ()=>console.log(`Server hört auf ${PORT}`))