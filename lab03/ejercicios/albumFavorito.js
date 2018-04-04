;(function () {
  var album_favorito = function (coleccion) {
    var contador = 0
    for (var i in coleccion) {
      contador++;
    }
    if (contador === 0) {
      return
    }
    var mas_reproducido = coleccion[0].tocado,
      mas_indice = 0
    for (var i = 1; i < contador; i++) {
      if (coleccion[i].tocado > mas_reproducido) {
        mas_reproducido = coleccion[i].tocado
        console.log(mas_reproducido)
        mas_indice = i
      }
    }
    return {play: mas_reproducido, index: mas_indice}
  }
  var music = {
    0: {
      nombre: 'Buenas noches mi país',
      genero: 'balada',
      artista: 'NOX',
      tocado: 22
    },
    1: {
      nombre: 'Todo se termino',
      genero: 'balada',
      artista: 'NOX',
      tocado: 15
    },
    2: {
      nombre: 'Solo quiere verte sonreir',
      genero: 'balada',
      artista: 'NOX',
      tocado: 85
    },
    3: {
      nombre: 'Unilateral',
      genero: 'balada',
      artista: 'NOX',
      tocado: 45
    },
    4: {
      nombre: 'Mine',
      genero: 'balada',
      artista: 'Bazzi',
      tocado: 70
    },
    5: {
      nombre: 'Beautiful',
      genero: 'balada',
      artista: 'bazzi',
      tocado: 63
    }
  }
  var fav = album_favorito(music)

  console.log('Tu album favorito: '+ music[fav.index].nombre +' fue tocado ' + fav.play + ' veces')
}())
