;(function () {
  function NumberPrimo (n1) {
    var analizar = typeof (n1)
    if (analizar == 'number') {
      var c = 0
      for (let i = 2; i < n1; i++) {
        if (n1 % i == 0)
          return 'El numero ' + n1 + ' no es primo'
      }
      return ' el numero ' + n1 + ' es primo'
    }else if (analizar == 'string') {
      return 'Error!!! Insertaste una cadena de texto'
    }else {
      return 'Error!!! Insertaste un booleano'
    }
  }
  console.log(NumberPrimo(3))
}())
