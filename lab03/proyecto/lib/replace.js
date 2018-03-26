exports.replace = function (objetivo, reemplazos) {
    var param_encontrados = objetivo.match(/%(.*?)%/g);
    //{%hello%, %world%, %hello%, %world%}
    if (param_encontrados) {

        var nombre_param = null,
        valor_reemplazo = null;
        //En esta seccion de codigo modificamos el primer valor encontrado por 
        for (var i = 0; i < param_encontrados.length; i++) {
            nombre_param = param_encontrados[i].replace(/%/g,'');
            valor_reemplazo = reemplazos[nombre_param];

            objetivo = objetivo.replace(param_encontrados[i],valor_reemplazo);

            
        }

    }
    return objetivo;
    
};