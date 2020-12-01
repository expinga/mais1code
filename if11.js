//Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado. 

var rs = require("readline-sync")

var n = rs.question("Digite um numero")

if (n >= 0) {
    n = n*2
    console.log("Dobro do numero é:", n)
}
else{
    n = n*3
    console.log("Tripro do numero é:", n)
}