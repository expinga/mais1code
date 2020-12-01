/*6. Tendo como entrada a altura e o sexo codificado da seguinte forma: Valor 1 para feminino 
Valor 2 para masculino 
de uma pessoa, construa um programa que calcule e imprima o valor de peso sugerido, utilizando as seguintes fórmulas: 
- para homens: (72.7 * Altura) – 58 
- para mulheres: (62.1 * Altura) – 44.7 */

var rs = require("readline-sync")

var sexo
var altura 

sexo = rs.question("Qual é seu sexo? Digite 1 para masculino e 2 para feminino")
altura = rs.question("Digite sua altura")

if(sexo == 2){
    alturaF = (62.1 * altura) - 44.7
    console.log("Seu peso sugerido é,", alturaF.toFixed(2))
}
else if(sexo ==1) {
    alturaM = (72.7* altura) -58
    console.log("Seu peso sugerido é,", alturaM.toFixed(2))

}
