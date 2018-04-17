var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/recove')

var tipo_schema = new Schema({
  nombre: String
})
model = mongoose.model('tipo_user', tipo_schema, 'tipo_user')

module.exports = {
  show: function (req, res) {
    model.find({}, function (err, items) {
      if (!err) {
        res.render('tipos', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  ver: function (req, res) {
    model.findById({_id: req.params.id}, function (err, items) {
      if (!err) {
        res.render('tipEditar', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  create: function (req, res) {
    var item = {
      nombre: req.body.nombre
    }
    var nuevo = new model(item).save((err, store) => {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else {
        res.redirect('/tipos')
      }
    })
  },
  edit: function (req, res) {
    model.findById({_id: req.body.id}, function (err, producto) {
      producto.nombre = req.body.nombre
      producto.save((err, update) => {
        if (err) {
          res.status(500).send('Algo salio mal!!!')
        }else {
          res.redirect('/tipos')
        }
      })
    })
  },
  delete: function (req, res) {
    model.findById({_id: req.params.id}, function (err, producto) {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else {
        producto.remove()
        res.redirect('/tipos')
      }
    })
  }
}
