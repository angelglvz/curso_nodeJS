const express = require('express')
const movies = require('./movies.json')

const app = express()

app.disable('x-powered-by') // quita la cabecera

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

app.get('/movies', (req, res) => {
  res.json(movies)
})
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log('servidor escuchando al puerto')
})
