/**
 * Created by Piercing on 17/9/15.
 */
"use strict";

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


// Llamar a la funcion escribeTras2Segundos,
// le decimos que cuando termine invoque el
// callback que le pasamos como último argumento.
escribeTras2Segundos('texto1', function(){
    console.log('termino!');
});







console.log('empiezo');

var escribeTras2Segundos = function (texto, callBack) {
    setTimeout(function () {
        console.log(texto);
        callBack();
    }, 2000);
};

escribeTras2Segundos('texto1', function () {
    console.log('he escrito el 1');
    escribeTras2Segundos('texto2', function () {
        console.log('he escrito el 2');

        /**
         @param {String|Function} code
         @param {number} delay
         @return {number}
         */
       // Window.prototype.setTimeout = function(code,delay) {};
        var escriberTras3segundos = function (texto, callback) {
            // setTimeout recibe como parámetros: el primero es un String o una función.
            // en este caso una función que imprime por consola un texto y llama a la función callback,
            // podemos llamarla como queramos.
            // el segundo parámetro que recibe es un delay, un número en milisegundos.
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


                console.log('empiezo por tercera vez');
                var escribeTras1Segundo = function (texto, callback) {
                    setTimeout(function () {
                        console.log(texto);
                        callback();
                    }, 1000);
                };
                escribeTras1Segundo('texto 3', function () {
                    console.log('escribo el primer texto tras un segundo');
                    escribeTras1Segundo('texto 4', function () {
                        console.log('escribo el segundo texto tras otro segundo más');


                        console.log('he terminado');
                    });
                });
            });
        });
    });
});






