/**
 * Created by macbookpro on 17/9/15.
 */

"use strict";

// cargamos librería de eventos

var events = require('events');

var myEventEmitter = new events.EventEmitter();


myEventEmitter.on('suena el teléfono', function (quien) {
    if (quien === 'madre') {
        return;
    } else {
        console.log('ring ring');
    }
});

myEventEmitter.on('suena el teléfono', function () {
    console.log('brr brr');
});

myEventEmitter.emit('suena teléfono', 'madre');