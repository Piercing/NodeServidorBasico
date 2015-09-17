/**
 * Created by macbookpro on 17/9/15.
 */

"use strict";

// cargamos el módulo de async
var async = require('async');

//definir un array

var arr = ['uno', 'dos', ' tres'];

// definir un iterador

var iterador = function (elemento, callback) {
    setTimeout(function () {
        if (elemento === 'dos') {
            return callback(null);
        }


    elemento = elemento + '-procesado';
    callback(null, elemento);
    return;
    }, 0);
};

// procesar el array

async.concat(arr, iterador, function (err, resultados) {
    // mostrar resultados
    console.log(resultados);
});