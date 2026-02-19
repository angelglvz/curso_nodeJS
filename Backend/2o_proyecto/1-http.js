const http = require('node:http'); // protocolo HTTP
const fs = require('node:fs');

const desiredPort = process.env.PORT ?? 3000

const processRequest = ((req, res) => {

    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        res.end('<h1>Bienvenido a mi página</h1>')
    }
    else if(req.url === '/contacto'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        res.end('<h1>llamame</h1>')
    }
    else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        res.end('<h1>404 not found</h1>')
    }
})

const server = http.createServer(processRequest)

server.listen(desiredPort, () =>{
    console.log(`server listening to http://localhost:${desiredPort}`)
})
