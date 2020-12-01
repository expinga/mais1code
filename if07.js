/*Escreva um programa para ler o número de lados de um polígono
 regular e a medida do lado (em cm). Calcular e imprimir o seguinte:*/

 /*Se o número de lados for igual a 3 escrever TRIANGULO e o valor da área − Se o número de lados for igual a
  4 escrever QUADRADO e o valor da sua área. − Se o número de lados for igual a 5 escrever PENTÁGONO.*/

var rs = require("readline-sync")

var qnt_lados = rs.question("Escreva a quantidade de lados")
var medida_lado = rs.question("Escreva a medida do lado (em cm)")


if(qnt_lados == 3){
    resultado = (medida_lado * medida_lado) / 2
    console.log("Triangulo, sua área é:", resultado)
}
if(qnt_lados == 4){
    resultado = (medida_lado * medida_lado)
    console.log("Quadrado a sua área é:", resultado)
}
if(qnt_lados == 5 ){
    altura = medida_lado * Math.sqrt(3) / 2
    resultado = 5 * medida_lado * altura
    console.log("Pentágono e a área é", resultado.toFixed(2))
}



