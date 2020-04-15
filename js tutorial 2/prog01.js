const readline = require('readline-sync');
a = readline.question('Digite um valor: ')
b = readline.question('Digite segundo valor: ')
c = readline.question('Digite terceiro valor: ')
d = parseInt(a,10)
e = parseInt(b,10)
f = parseInt(c,10)

if (a>b && a>c){
    console.log("O Maior numero é: "+a)
    }else if (b>a && b>c){
    console.log("O Maior numero é: "+b)
    }else{
    console.log("O Maior numero é: "+c)
    }