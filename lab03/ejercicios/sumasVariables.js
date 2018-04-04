;(function () {
  function Sumar () {
    var numbers = []
    return {
      agregar: function (a) {
        numbers.push(a)
      },
      obtenerSumaActual: function () {
        if (numbers.length === 0) {
          return 0
        }else {
          var resul = 0
          for (let i = 0; i < numbers.length; i++) {
            resul += numbers[i]
          }
          return resul
        }
      }
    }
  }
  var s1 = Sumar()
  var s2 = Sumar()

  s1.agregar(10)
  s1.agregar(20)

  s2.agregar(30)
  s2.agregar(5)
  // imprime 30
  console.log(s1.obtenerSumaActual())
  // imprime 35
  console.log(s2.obtenerSumaActual())
}())
