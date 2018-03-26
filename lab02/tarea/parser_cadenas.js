function parser_cadenas (cadena) {
    var texto = cadena.split('=')
  var palabras = texto[1].split('+')
  var junto = ''
  for (var i = 0; i < palabras.length; i++) {
    junto += palabras[i]
  }
  var mayuscula = junto.toUpperCase()
  var miniscula = junto.toLowerCase()
  var numerocara = cadena.length
  var capital = capitalizar(junto)

  return {
    junto: junto,
    mayuscula: mayuscula,
    miniscula: miniscula,
    numerocara: numerocara,
    capitalizar: capital

  }
}
module.exports.parser_cadenas = parser_cadenas
function capitalizar (cadena) {
  var resul = ''
  for (var i = 0; i < cadena.length; i++) {
    if (i == 0) {
      resul += cadena.charAt(i).toUpperCase()
    }else{
    resul += cadena.charAt(i).toLowerCase()
    }
  }
  return resul;
}
