const readline = require('readline-sync');
a = readline.question('Digite o primeiro lado: ')
b = readline.question('Digite o segundo lado: ')
c = readline.question('Digite a base: ')
d = parseInt(a,10)
e = parseInt(b,10)
f = parseInt(c,10)


if(d=e&&d==f){
    console.log("Triângulo Equilátero")
}else if (d==e||d==f||e==f){
    console.log("Triângulo Isósceles")}
else {console.log("Triângulo Escaleno")}   
