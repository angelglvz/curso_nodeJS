const fs = require('node:fs/promises') // a partir de Node 16 se recomienda poner node:

console.log('leyendo el primer archivo...')
fs.readFile('Backend/archivo.txt', 'utf-8')
    .then(text=>{
        console.log('primer texto: ', text)
    })

console.log('leyendo el segundo archivo...')
fs.readFile('Backend/archivo2.txt', 'utf-8')
    .then(text=>{
        console.log('segundo texto: ', text)
    })