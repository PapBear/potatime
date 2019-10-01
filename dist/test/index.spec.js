"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var pota = new index_1.Potato('potatow');
var opt = {
    duration: 10,
    callback: function (rem) {
        console.log('rem : ' + rem);
    }
};
pota.start(opt);
setTimeout(function () {
    pota.start({ duration: 3, callback: opt.callback });
    var potato = index_1.Potato.findPotato("potatow");
    if (potato)
        console.log(potato.name);
}, 3200);
