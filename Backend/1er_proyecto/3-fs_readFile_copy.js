const fs = require('node:fs') // a partir de Node 16 se recomienda poner node:

console.log('leyendo el primer archivo...')
fs.readFile('Backend/archivo.txt', 'utf-8', (err, text)=>{
    console.log(text)
})

console.log('leyendo el segundo archivo...')
fs.readFile('Backend/archivo2.txt', 'utf-8', (err, secondText)=>{
    console.log(secondText)
})

