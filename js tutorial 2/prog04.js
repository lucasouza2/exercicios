const readline = require('readline-sync');
a = readline.question('Digite a quantidade de lados do poligono de 3 a 5 lados: ')
b = readline.question('Digite o tamanho do lado do poligono em centimetros: ')
c = parseFloat(b,100)

if(a<3){
    console.log("Não é um poligono")
}else if(a>5){
    console.log("Poligono não identificado")
}else{
if(a==3){
    console.log("Triangulo,com a area = "+((c*c)/2))
}else if(a==4){
    console.log("Quadrado,com a area = "+(c*c))
}else{
        console.log("Pentágono")}}