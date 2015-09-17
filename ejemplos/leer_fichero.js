/**
 * Created by macbookpro on 17/9/15.
 */

"use strict";

var fs = requiere('fs');


var path = requiere('path');

// Abrir un fichero

var fichero = path.join('./', +'pruebas.js');

console.log('Abrir' + fichero);

// la fuction es un callback
fs.readFile(fichero, {encoding: 'utf-8'}, function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    var objeto = JSON.parse(data);

    console.log(objeto.nombre);
});

// Convertir su contenido (JSON) a objeto

// el objeto lo usamos