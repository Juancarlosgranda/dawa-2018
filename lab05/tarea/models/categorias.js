var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/recove')

var categoria_schema = new Schema({
  nombre: String
})
cat_model = mongoose.model('categoria', categoria_schema, 'categoria')

module.exports = {
  show: function (req, res) {
    cat_model.find({}, function (err, items) {
      if (!err) {
        res.render('categoria', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  ver: function (req, res) {
    cat_model.findById({_id: req.params.id}, function (err, items) {
      if (!err) {
        res.render('catEditar', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  create: function (req, res) {
    var item = {
      nombre: req.body.nombre
    }
    var nuevo = new cat_model(item).save((err, store) => {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else {
        res.redirect('/categoria')
      }
    })
  },
  edit: function (req, res) {
    cat_model.findById({_id: req.body.id}, function (err, producto) {
      producto.nombre = req.body.nombre
      producto.save((err, update) => {
        if (err) {
          res.status(500).send('Algo salio mal!!!')
        }else {
          res.redirect('/categoria')
        }
      })
    })
  },
  delete: function (req, res) {
    // var id = mongoose.Types.ObjectId(req.params.id)
    cat_model.findById({_id: req.params.id}, function (err, producto) {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else {
        producto.remove()
        res.redirect('/categoria')
      }
    })
  }
}
