;(function () {
  var mayor = function (o1, o2) {
    if (o1.tamano > o2.tamano) {
        console.log(o1.tamano+' es mayor')
    }else if (o1.tamano == o2.tamano) {
        console.log(o1.tamano + ' es igual a '+ o2.tamano)
    }else {
        console.log(o2.tamano+' es mayor')
    }
  }
  var x = {
    tamano: 45
  }
  var y = {
    tamano: 120
  }

  mayor(x, y)
}())
