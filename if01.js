/*1. (OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga 
se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu). */

var rs = require("readline-sync")

var ano = rs.question("Qual é seu ano de nascimento?")

var d = new Date

var resultado = d.getFullYear() - ano


if(resultado < 16){
    console.log("Voto não obrigatório")
}
else if(resultado > 60 ){
    console.log("Voto não obrigatório")
}
else{
    console.log("Voto obrigatório")
}




