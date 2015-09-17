/**
 * Created by Piercing on 17/9/15.
 */
"use strict";

console.log('empiezo');

var escribeTras2Segundos = function (texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
};

escribeTras2Segundos('texto', function () {
    console.log('he escrito el 1');
    escribeTras2Segundos('texto2', function () {
        console.log('he escrito el 2');


        var escriberTras3segundos = function (texto, callback) {
            setTimeout(function () {
                // muestro por consola el texto que recibe como parámetro
                console.log(texto);
                // llamo a la función callback que espere 2 seg.
                callback();
            }, 2000);
        };
        console.log('empiezo por segunda vez');
        // llamo a la función que guarda escribeTras3Segundos con los paréntesis ().
        // le paso un  texto como primer parámetro
        // le paso la función que es el callback y que hará que
        // espere 3 seg antes de mostrar el texto por consola.
        // y muestro por consola un texto advirtiendo que ya he escrito después de los 3 seg.
        escriberTras3segundos('texto 1', function () {
            console.log('he escrito el texto 1 tras tres segundos');
            escriberTras3segundos('texto 2', function () {
                console.log('he escrito el texto 2 tras otros tres segundos');
                console.log('he terminado');
            });
        });
    });
});





