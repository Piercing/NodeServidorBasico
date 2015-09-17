/**
 * Created by macbookpro on 17/9/15.
 */
 "use strict";

// Hacemos un constructor de objetos
var Persona = function (name) {
    this.name = name;
}

// Creamos un objeto

var persona = new Persona('Thomas');

// le asignamos un método al objeto
persona.saluda = function(){
    console.log('Hola soy ' + this.name);
};

persona.saluda();

// creamos otro objeto

var luis = new  Persona('Luis');

// veremos que no tiene el método

//luis.saluda();

// ponerle un método al prototipo

Persona.prototype.come = function(){
    console.log('ñan ñam');
};

// veremos que lo tienen todos

persona.come();
luis.come();