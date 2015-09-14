"use strict";

console.log('empiezo');

var escribeTras2Segundos = function (texto, callBack) {
    setTimeout (function(){
        console.log(texto);
        callBack();
    }, 1000);
}

function serie(n, func, callbackFin) {
    if (n > 0) {
        n--;
        func('cuento hacia atrás: ' + n, function () {//se vuelve a llamar a si misma, es decir a serie, método recursivo
            serie(n, func, callbackFin);
        });
    }else{
        callbackFin();
    }
}

serie(5, escribeTras2Segundos, function(){
    console.log('he terminado');
});

   // escribeTras2Segundos('Texto1', function () {
     //   console.log('he escrito el 1');
    //});



