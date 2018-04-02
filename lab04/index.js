var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.send('Hola mundo! en express :)')
})
app.post('/', function (req, res) {
  res.send('Llamada POST misma url')
})
app.put('/user', function (req, res) {
  res.send('Recibimos un PUT en /user')
})
app.delete('/user', function (req, res) {
  res.send('Recibimos un Delete en /user')
})
app.use(function (err, req, res, next) {
  console.error(error.stack)
  res.status(500).send('Algo salio mal!!!')
})
app.use(function (req, res, next) {
  res.status(404).send('Eso no existe!!!')
})
app.listen(3000, function () {
  console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})
