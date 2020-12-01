/*2. (OBRIGATÓRIO) Faça um programa que receba um número do usuário e 
verifique se este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR” */

var rs = require("readline-sync")

var numero = rs.question("Digite um número")

var resto 

resto = numero % 2

if(resto == 0){
    console.log("O numero digitado é par")
}
else{
    console.log("O numero digitado é ímpar")
}