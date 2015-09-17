/**
 * Created by macbookpro on 17/9/15.
 */

"use strict";

var one = {
    id: 123,
    count: 41,
    desc: 'esto es la descripción'
};

var two = {
    name: 'El nombre',
    tag: 'js',
    values: [1,2,3]
};

var three = {
    count: 42,
    title: 'título',
    desc: null,
    values: [4,5,6]
};

// cargamos la librería util

var util = require('util');



var extendido = util._extend(one, two);

console.log(util._extend(extendido, three));
