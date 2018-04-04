;(function () {
  function MusicaBox () {
    var musica = []
    var favorito = ''
    return {
      addAlbum: function (cancion) {
        musica.push(cancion)
      },
      favoriteAlbum: function () {
        if (musica.length === 0) {
          return null
        }
        var temp = musica[0]
        for (var i = 1; i < musica.length; i++) {
          if (musica[i].reprodcciones() > temp.reprodcciones()) {
            temp = musica[i]
          }
        }
        return temp.cancion()
      },
      arrayas: function () {
        return musica
      }
    }
  }
  var Album = function (a , b) {
    var reprod = 0
    return {
      cancion: function () {
        return a + ' - ' + b
      },
      play: function () {
        console.log('Se esta reproduciendo ' + this.cancion())
        reprod++
      },
      reprodcciones: function () {
        return reprod
      }

    }
  }

  var box = MusicaBox(),
    a1 = Album('The who', 'Tommy'),
    a2 = Album('Tom Waits', 'Closing Time'),
    a3 = Album('Jhon Cale', 'Paris 1919'),
    favorito

  box.addAlbum(a1)
  box.addAlbum(a2)
  box.addAlbum(a3)

  a1.play() // imprime "Tocando The who - tomy"
  a2.play() // imprime "Tocando Tom Waits - Closing Time"
  a1.play() // imprime "Tocando The who - tomy"
  a3.play()
  a3.play()
  a3.play()

  favorito = box.favoriteAlbum()
  // Imprime tu album favorito es the who - Tommy
  console.log('///////////////////////////////////////////')
  console.log('Tu album favorito es ' + favorito)
}())
