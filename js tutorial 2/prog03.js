const readline = require('readline-sync');
a = readline.question('Digite o primeiro angulo do triangulo: ')
b = readline.question('Digite o segundo angulo do triangulo: ')
c = readline.question('Digite o terceiro angulo do triangulo: ')
d = parseInt(a,10)
e = parseInt(b,10)
f = parseInt(c,10)

if(d==0||e==0||f==0){
    console.log("Não é permitido angulo igual a 0")
}else{if (d+e+f!=180){
    console.log("NÃO É UM TRIANGULO")}
else{
    if(d==90||e==90||f==90){
    console.log("Triângulo Retangulo")
}else if (d>90||e>90||f>90){
    console.log("Triângulo Obtusângulo")}
else {console.log("Triângulo Acutângulo")} 
 
}
}