var http = require('http');
var manejador = function (solicitud, respuesta){
    console.log('Conexion entrante');
    respuesta.end('hola mundo!');
}
var servidor = http.createServer(manejador);
servidor.listen(8080);