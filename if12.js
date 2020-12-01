//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var rs = require("readline-sync")

var n1 = rs.question("Digite um numero")
var n2 = rs.question("Digite outro numero")

resultado = n1 % n2

if (resultado == 0) {
    console.log("O primeiro numero é divisivel pelo segundo")
}
else{
    console.log("O primeiro numero não é divisivel pelo segundo")
}
