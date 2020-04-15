var cilindro = require('./cilindro.js');
var http=require('http');
http.createServer(function(rec,res){
    res.end("Um cilindro com raio 2 e altura 4 possui volume igual a "+cilindro.volumeCilindro(2,4)+ " e area externa igual a " +cilindro.areCilindro(2,4))
}).listen(8181)
