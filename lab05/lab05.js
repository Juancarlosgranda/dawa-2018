var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  producto = require('./models/prod'),
  user = require('./models/user')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/producto', (req,res)=>{
res.render('producto')
})
app.post('/producto', producto.create)
app.post('/producto/update', producto.update)
app.post('/producto/delete', producto.delete)

app.get('/login',(req, res) =>{
  res.render('login')
})
app.post('/login', user.login)
app.get('/table', function (req, res) {
  res.render('table')
})

app.listen(9090, function () {
  console.log('Iniciando!')
})
