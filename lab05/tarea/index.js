var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  categoria = require('./models/categorias'),
  tipos = require('./models/tipos'),
  usuarios = require('./models/usuarios')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index')
})
app.get('/categoria', categoria.show)
app.get('/categoria/edit/:id', categoria.ver)
app.post('/categoria/edit', categoria.edit)
app.post('/categoria/create', categoria.create)
app.get('/categoria/delete/:id', categoria.delete)
app.get('/tipos', tipos.show)
app.get('/tipos/edit/:id', tipos.ver)
app.post('/tipos/edit', tipos.edit)
app.post('/tipos/create', tipos.create)
app.get('/tipos/delete/:id', tipos.delete)
app.get('/usuarios', usuarios.show)
app.get('/usuarios/edit/:id', usuarios.ver)
app.post('/usuarios/edit', usuarios.edit)
app.get('/usuarios/create',(req,res)=>{
    res.render('usuCrear')
})
app.post('/usuarios/create', usuarios.create)
app.get('/usuarios/delete/:id', usuarios.delete)
app.listen(9090, function () {
  console.log('Iniciando!')
})
