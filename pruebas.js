/**
 * Created by macbookpro on 16/9/15.
 */
"use strict";
/**
 var pinto = 'my value';

 function pinta(){
    var pintada = 'local value';
    console.log('pinto', pinto, pintada);

};

 pinta();
 **/

/**
 var x = 100;
 var y = function(){
    if (x == 20){
        var x = 30;
    }
    return x;
};
 console.log(x, y());
 **/

var objeto = {
    numero: 1,
    texto: "hola",
    esCero: function (v) {
        return v == 0;
    }
}
objeto.esCero(0); // true
objeto.texto; // "hola"
objeto["texto"]; //"hola"
for (var pname in objeto) {
    // si queremos saber si un objeto tiene una propiedad
    if (objeto.hasOwnProperty(pname)) {
        console.log("la propiedad " + pname + " existe con el valor " + objeto[pname]);
    }
}

var numero = 7;
try{
    switch (numero) {
        case 1:
            console.log('es 1');
            break;
        case "hola":
            console.log('es 2');
            break;
        default:
            console.log('no se conoce');
            break;
    }
}catch(e){
    console.log(e.message);
}


