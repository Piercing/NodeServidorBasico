
"use strict"

var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('<style>html {background-image: url("http://bit.do/wakeupneo")</style>');
});

server.listen(1337, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1337');

"use strict";

var http = require ('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Wake up, Neo ' +
        '\n');
});

server.listen(1337, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1337');

