const readline = require('readline-sync');
a = readline.question('Digite a base: ')
b = readline.question('Digite a altura: ')
c = parseInt(a,10)
d = parseInt(b,10)
area = (c*d)

console.log("Sendo de base "+c+" e altura "+d+" a área desse retangulo é de "+area)
