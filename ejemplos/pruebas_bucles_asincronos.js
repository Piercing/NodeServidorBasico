/**
 * Created by Piercing on 17/9/15.
 */
"use strict";

/*
console.log('empiezo');

var escriboTras2Segundos = function (texto, callBack) {
    // setTimeout llama a callBack, que es la function
    // que le pasamos, después de un segundo (1000).
    setTimeout(function () {
        // primero pintamos en consola el texto
        console.log(texto);
        // llamo al callBack() como función con los paréntesis,
        // para que el que utilice esta función sepa que hemos acabado.
        callBack();
    }, 2000);
}

escriboTras2Segundos('texto1', function () {
    console.log('he escrito el 1');
    escriboTras2Segundos('texto 2', function () {
        console.log('he escrito el 2');
        escriboTras2Segundos('finalizando...', function () {

            escriboTras2Segundos('', function () {
                console.log('he teminado');
            });
        });
    });
});*/

console.log('comienzo bucle asíncrono');

var escriboTras2Segundos = function(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    },1000);
}

function serie (n, func, callbackFin){
    if(n>0){
        n--;
        // aquí llamo a escriboTras2Segundos (texto y callback)
        // es decir, cuando termine de imprimir texto llamo a una función que será
        // el callback para cuando haya terminado de escribir y me vuelvo a llamar a mi mismo.
        func('texto', function(){
            serie(n, func, callbackFin);
        });
    }else{
        callbackFin();
    }
}

// llamo a serie y le paso 'n', 'llamo a la función serie, y un callback, para que cuando termine con la
// función esperaTras2Segundos y nos avise llame al callback que es la fuction() para que impirma por consola
// que hemos terminado.
serie(5,escriboTras2Segundos, function () {
    console.log('he terminado');
});












