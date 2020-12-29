// 5. Faça um programa que calcule a potência (potenciação) de um número.
// Para isso ele deve receber dois números de entrada: o primeiro número é a base da
// potência, o segundo número será a potência.
// EX: usuário inseriu 2 para base e 4 para potência.
// O programa imprime :
// 16
// Lembrando: 2

// 4 = 2*2*2*2

var rs = require("readline-sync")

var numero_base = rs.question("Informe o numero base: ")
var numero_potencia = rs.question("Informe o numero potencia: ")
cont = 0
resultado = 1
while(cont < numero_potencia){

    resultado = resultado * numero_base
    cont++
       
}
console.log(resultado)

