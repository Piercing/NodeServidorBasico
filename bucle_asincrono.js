/**
 * Created by Piercing on 17/9/15.
 */
"use strict";

/*console.log('empiezo');

var escribeTras2Segundos = function (texto, callBack) {
    setTimeout(function () {
        console.log(texto);
        callBack();
    }, 1000);
};

// función recursiva
function serie(n, func, callbackFin) {
    if (n > 0) {
        n--;
        // "func" está llamando a "escribeTras2Segundos"
        // el callback que recibe "escribeTras2segundos" es function()
        // y esta function() a su vez vuelve a llamar a la function serie,
        // y así una y otra vez. Esto no va a terminar nunca porque no le hemos puesto ninguna condición.
        func('texto', function () {
            serie(n, func, callbackFin);
        });
    }else{
        callbackFin();
    }
}

// llamamos a serie
// si a la función escribeTras2Segundos no le ponemos los paréntesis recibe el valor que devuelve dicha función
// si la ponemos con paréntesis estamos llamando a la función en si, no a lo que devuelve dicha función.
// Recibe por tanto un número, el resultado de escribeTras2Segundos y como callback una función que escribe por consola.
serie(5, escribeTras2Segundos, function () {
    console.log('he terminado');
});*/


// CÓDIGO PROFESOR CON COMENTARIOS
console.log('empiezo');

// función con resultado asíncrono
// no lo devuelve con return, si no en el callback
var escribeTras2Segundos = function(texto, callBack) {
    setTimeout( function(){
        console.log(texto);
        callBack();
    }, 1000);
};

// función ayudante, que va a hacer 5 llamadas
// a escribeTras2Segundos, una detrás de otra
function serie(n, func, callbackFin) {
    if (n > 0) {
        n--;
        // llamo a escribeTras2Segundos
        func('texto', function () {
            // cuando termine, vuelvo a
            // llamarme a mismo (serie)
            serie(n, func, callbackFin);
        });
    } else {
        // si n llega a 0 es que he acabado,
        // llamo a la función que pasaron
        // para ello, callbackFin
        callbackFin();
    }
};

// llama a la función escribeTras2Segundos 5 veces,
// y cuando termines, haces lo que te paso en
// el callback.
serie(5, escribeTras2Segundos, function(){
    console.log('he terminado');
});
