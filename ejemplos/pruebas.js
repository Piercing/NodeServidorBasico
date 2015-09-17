/**
 * Created by Piercing on 16/9/15.
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
 */

/*var objeto = {
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
 }*/

// Hoisting de variables
// LLeva a la variable arriba
// dando como resultado undefined
/*var valor = 'hola';

 function pinta() {
 console.log(valor);
 var valor = 'adios';
 };

 pinta();*/


/*var Coche = function(marca){
 this.name = marca;
 };

 var coche = new Coche('Tesla');

 console.log(coche.name);

 var c = (false == 0);
 var d = (false == "");
 console.log(c, d);*/
//
//{
//    "nombre": javier",
//    "apellido": "garcia"
//};

var Coche = function (name) {
    this.name = name;
    this.saluda = function () {
        console.log('Hola soy ' + this.name);
    }
};

var tesla = new Coche('Tesla');

var Planta = function (name) {
    this.name = name;
    this.crece = tesla.saluda();// reutilizo el método
    this.crece1 = function () {
        tesla.saluda();
    }
};


// Creamos un objeto

//// llamamos a método
//tesla.saluda();
//
//// Otro llama al método
//setTimeout(tesla.saluda.bind(tesla), 1000);

var planta = new Planta('flor');

console.log(planta.name);

planta.crece();
//planta.crece1();










