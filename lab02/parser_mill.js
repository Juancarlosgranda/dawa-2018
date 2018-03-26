function parse_mill(fecha){
    var fechafinal= fecha;
    
    var fech1= new Date().getTime();
    var fech2 = new Date(fecha).getTime();
    var rep='';
    if(fech1>fech2){
        var rep = 'la fecha ingresada ya venció';
    }else{
        
        var diff = (fech2 - fech1)/(1000*60*60*24);
        var resultado = Math. round(diff*Math. pow(10,0))/Math. pow(10,0);
        var rep = 'Faltan '+resultado+' días';
    }

    return{
        dias: rep
    };
}
module.exports.parse_mill = parse_mill;
//function navidad(){var fech1= new Date().getTime();fech2= new Date('2018-12-25').getTime(); var diff=(fech2 - fech1)/(1000*60*60*24);var resultado=Math. round(diff*Math.pow(10,0))/Math.pow(10,0);return 'faltan '+resultado+ ' dias para navidad';}