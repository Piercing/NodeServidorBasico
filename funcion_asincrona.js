"use strict";

// ****************** DOS EJEMPLOS DE FUNCIONES ASÍNCRONAS ********************//
//************************ FUNCIÓN ASÍNCRONA CON BUCLE **********************//
console.log('empiezo');


// función con resultado asíncrono
// no lo devuelve con return, sino con callback
var escribeTras2Segundos = function (texto, callBack) {
    setTimeout (function(){
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
        func('cuento hacia atrás: ' + n, function () {//se vuelve a llamar a si misma, es decir a serie, método recursivo
           // cuando termine, vuelvo a llamarme a mi mismo (serie), método recursivo
            serie(n, func, callbackFin);
        });
    }else{
        // si n llega a 0 es que he acabado,
        // llamo a la función que pasaron
        // para ello, callbackFin
        callbackFin();
    }
}

// llama a la función escribeTras2Segundos 5 veces,
// y cuando termines, haces lo que te paso en el callback
serie(5, escribeTras2Segundos, function(){
    console.log('he terminado');
});

// Lllamar 1 vez a la función escribeTras2Segundos ya no nos hace falta
// porque queremos llamarla 5 veces.
//escribeTras2Segundos ('texto1', function(){
//      console.log('he escrito 1');
//});


//************************* FUCIÓN ASÍNCRONA SIN BUCLE *****************************//

console.log('empiezo');

// función con resultado asíncrono
// no lo devuelve con return, si no en el callback
var escribeTras2Segundos = function (texto, callbakc){
    setTimeout(function(){
        console.log(texto);
        callbakc();
    }, 1000);
};

// Llamar a la función escribeTras2Segundos
// le decimos que cuando termine invoque el
//callback que le pasamos como último argumento.
escribeTras2Segundos('texto1', function(){
    console.log('termino!');
});

