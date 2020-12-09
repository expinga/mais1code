// 1. Faça um programa que leia o valor de um produto X e leia a quantidade de reais
// de um cofrinho que contenha:
// a. N moedas de 1 real;
// b. N moedas de 50 centavos;
// c. N moedas de 25 centavos;
// d. N moedas de 10 centavos;
// e. N moedas de 5 centavos;
// f. N moedas de 1 centavos.
// O programa deverá verificar se o total de reais que contém no cofrinho é o
// bastante para compra o produto X e imprimir se possui ou não valor suficiente


var rs = require("readline-sync")


preco = rs.questionFloat("Informe o valor do produto: R$ ")
um_real = rs.questionFloat("Informe a quantidades de moedas de 1 real ")
cinquenta_cent = rs.questionFloat("Informe a quantidades de moedas de 0.50 centavos ")
vcinco_cent = rs.questionFloat("Informe a quantidades de moedas de 0.25 centavos ")
dez_cent = rs.questionFloat("Informe a quantidades de moedas de 0.10 centavos ")
cinco_cent = rs.questionFloat("Informe a quantidades de moedas de 0.05 centavos ")
um_cent = rs.questionFloat("Informe a quantidades de moedas de 0.01 centaos ")


total_confre = (um_real * 1) + (cinquenta_cent * 0.50) + (vcinco_cent * 0.25) + (dez_cent * 0.10) + (cinco_cent * 0.05) + (um_cent * 0.01)

if(total_confre >= preco){
    console.log("O dinheiro do cofrinho é suficiente para comprar o produto!")
    console.log("Valor do produto: ", preco)
    console.log("Total do dinheiro guardado no cofrinho: ", total_confre.toFixed(2))
}else{
    console.log("Dinheiro insuficiente para comprar o produto")
}

