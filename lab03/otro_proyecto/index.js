var _ = require('grandaramos-tecsup')

var objetivo = '%hello% %world%! -- %world% %hello%!'
var idioma = 'es'
var reemplazos = {
  'en': {
    'hello': 'Hello',
    'world': 'World'
  },
  'es': {
    'hello': 'Hola',
    'world': 'Mundo'
  }
}
var resultado = _.replace(objetivo, reemplazos[idioma])
console.log(resultado)
