const fs = require('node:fs') // a partir de Node 16 se recomienda poner node:

console.log('leyendo el primer archivo...')
const text = fs.readFileSync('Backend/archivo.txt', 'utf-8')

console.log(text)

console.log('leyendo el segundo archivo...')
const secondText = fs.readFileSync('Backend/archivo2.txt', 'utf-8')

console.log(secondText)