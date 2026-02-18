//esta forma de hacer promesas es para cuando haya modulos nativos que no
//pueden usar promesas de manera natural

const fs = require('node:fs') // a partir de Node 16 se recomienda poner node:
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('leyendo el primer archivo...')
fs.readFilePromise('Backend/archivo.txt', 'utf-8')
    .then(text=>{
        console.log('primer texto: ', text)
    })

console.log('leyendo el segundo archivo...')
fs.readFilePromise('Backend/archivo2.txt', 'utf-8')
    .then(text=>{
        console.log('segundo texto: ', text)
    })