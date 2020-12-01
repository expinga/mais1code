/*10. Faça um programa que receba três notas, calcule e 
mostre a média aritmética entre elas, caso a média aritmética seja: 
Media maior ou igual a 7 imprimir : 
ALUNO APROVADO 
Media menor que 7 imprimir : 
ALUNO REPROVADO */

var rs = require("readline-sync")

var n1 = rs.questionFloat("Digite a nota 1")
var n2 = rs.questionFloat("Digite a nota 2")
var n3 = rs.questionFloat("Digite a nota 3")

var m = (n1 + n2 + n3) / 3

if (m >= 7) {
    console.log("ALUNO APROVADO")
}
else{
    console.log("ALUNO REPROVADO")
}

