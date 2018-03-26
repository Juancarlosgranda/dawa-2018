var http = require('http'),
  fs = require('fs'),
  querystring = require('querystring'),
  parser = require('./parser_cadenas.js'),
  p = parser.parser_cadenas
dataString = ''

var form = fs.readFileSync('./formtexto.html')

http.createServer(function (req, res) {
  if (req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(form)
  }else if (req.method == 'POST') {
    req
      .on('data', function (data) {
        dataString += data
      })
      .on('end', function () {
        var resultado = p(dataString)

        var html = '<!DOCTYPE html>'
        html += '<html>'
        html += '<head>'
        html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'
        html += '</head>'
        html += '<body>'
        html += '<h2>'
        html += 'Borrando espacios: ' + resultado['junto'] + '<br>'
        html += 'Capitalizando: ' + resultado['capitalizar'] + '<br>'
        html += 'Palabras en mayúscula: ' + resultado['mayuscula'] + '<br>'
        html += 'Palabras en minúscula: ' + resultado['miniscula'] + '<br>'
        html += 'Cantidad de caracateres: ' + resultado['numerocara']
        html += '</h2>'
        html += '</body>'
        html += '</html>'
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(html)
      })
  }
}).listen(8080)
