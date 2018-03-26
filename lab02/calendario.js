var http = require('http'),
    fs = require('fs'),
parser = require('./parser_var.js'),
parser2 = require('./parser_mill.js'),
    p= parser.parse_vars,
    days= parser2.parse_mill;

http.createServer(function (req,res){
    fs.readFile('./dias.html',function(err,html){
        var html_string = html.toString();
        var respuesta = p(req),
            parametros = respuesta['parametros'],
            valores = respuesta['valores'];
        var rep2 = days(valores),
            dias = rep2['dias'];
        
        html_string = html_string.replace('{dias}',dias);
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(html_string);
        res.end();
    });
}).listen(8080);