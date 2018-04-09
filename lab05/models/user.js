module.exports = {
  login: function (req, res) {
    if ((req.query.username == 'tecsup') && (req.query.password == 'tecsup')) {
      res.send('Bienvenido')
    }else {
      res.send('email o contrasenia incorrectas')
    }
  }

}
