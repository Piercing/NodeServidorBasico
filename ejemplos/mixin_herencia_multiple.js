/**
 * Created by macbookpro on 17/9/15.
 */

"use strict";

var Persona = function (nombre, apel){
    this.nombre = nombre;
    this.apellido = apel;
}

// creamos una persona

var trinity = new Persona('Tinity');

// hacemos trinity que herede primero de un objeto y después de otro, hacemos un mixin

var matrixMixin = {
    vuela : function(){
        console.log(this.nombre + ' vuela');
    },
    esquivaBalas: function(){
        console.log(this.nombre + ' esquiva balas');
    }
};

var util = require('util');
// cogemos a la persona y su prototype
// le vamos a extender su prototipo con dos cosas,
// su propio prototipo de persona y le añadimos nuestro mixin de matrix
// para que esa persona pueda volas y esquivar balas

Persona.prototype = util._extend(Persona.prototype, matrixMixin);

var neo = new Persona('Thomas', 'Anderson');

neo.vuela();
trinity.vuela();

neo.esquivaBalas();
trinity.esquivaBalas();
