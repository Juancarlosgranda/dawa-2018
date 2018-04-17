var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/recove')

var usuario_schema = new Schema({
  nombres: String,
  correo: String,
  user: String,
  password: String,
  tipo: String
})

user_model = mongoose.model('users', usuario_schema, 'users')

module.exports = {
  show: function (req, res) {
    user_model.find({}, function (err, items) {
      if (!err) {
        res.render('usuarios', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  ver: function (req, res) {
    user_model.findById({_id: req.params.id}, function (err, items) {
      if (!err) {
        res.render('usuEditar', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  create: function (req, res) {
    var nuevo = new user_model(req.body).save((err, store) => {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else {
        res.redirect('/usuarios')
      }
    })
  },
  edit: function (req, res) {
    user_model.findById({_id: req.body.id}, function (err, producto) {
      producto.nombres = req.body.nombres
      producto.correo = req.body.correo
      producto.user = req.body.user
      producto.password = req.body.password
      producto.tipo = req.body.tipo
      producto.save((err, update) => {
        if (err) {
          res.status(500).send('Algo salio mal!!!')
        }else {
          res.redirect('/usuarios')
        }
      })
    })
  },
  delete: function (req, res) {
    user_model.findById({_id: req.params.id}, function (err, producto) {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else {
        producto.remove()
        res.redirect('/usuarios')
      }
    })
  }
}
