var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var producto_schema = new Schema({
  nombre: String,
  descripcion: String,
  precio: String
})
prod_model = mongoose.model('producto', producto_schema, 'producto')
module.exports = {
  show: function (req, res) {
    if (req.query._id == null) {
      prod_model.find({}, function (err, items) {
        if (!err) {
          // res.send(items)
          res.render('table', {data: items})
        }else {
          return console.log(err)
        }
      })
    }else {
      prod_model.findOne({_id: req.query._id}, function (err, items) {
        if (!err) {
          res.send(items)
        }else {
          return console.log(err)
        }
      })
    }
  },
  create: function (req, res) {
    console.log('entrando al post producto')
    console.log(req.body)
    var nuevo = new prod_model(req.body).save((err, store) => {
      if (err) {
        res.status(500).send('Algo salio mal!!!')
      }else{
        res.send("Producto creado correctamente")
      }
    })
   
  },
  update: function (req, res) {
    prod_model.findOne({_id: req.query._id}, function (err, producto) {
      producto.nombre = req.query.nombre
      producto.descripcion = req.query.descripcion
      producto.precio = req.query.precio
      producto.save()
      res.send(producto)
    })
  },
  delete: function (req, res) {
    prod_model.findOne({_id: req.query._id}, function (err, producto) {
      producto.remove()
      res.send({status: true})
    })
  }
}
