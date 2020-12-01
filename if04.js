/*4. (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que 12, 
e R$ 0,25 se forem compradas 12 ou mais. 
Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra*/

var rs = require("readline-sync")

var qnt_macas

qnt_macas = rs.question("Informe a quantidade de maças compradas ")


if(qnt_macas < 12){
    var resultado = qnt_macas * 0.30
    console.log("O valor total das compras é: R$ ", resultado.toFixed(2))
}
else{
    var resultado = qnt_macas * 0.25
    console.log("O valo total das compras é: R$ ", resultado.toFixed(2))
}