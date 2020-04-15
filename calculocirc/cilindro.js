var circulo = require('./circulo.js');
var PI = Math.PI;
exports.volumeCilindro = function (r,h){
    return circulo.area(r)*h;
};
exports.areCilindro = function (r,h){
    return 2*circulo.area(r)+2*PI*r*h;
};