// 4. Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário.
// Faça um programa que receba o salário, o valor do empréstimo e o número de
// prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
// informados pode ser zero ou negativo.

var rs = require("readline-sync")

var salario = rs.questionFloat("Informe o salário: ")
var emprestimo = rs.questionFloat("Informe o valor do empréstimo: ")
var qnt_prestacao = rs.question("Informe a quantidade de prestações: ")

resultado = emprestimo/qnt_prestacao 


if(salario == 0 ||  emprestimo == 0 || qnt_prestacao == 0){
    console.log("Nenhuma das informações poderá ser zero")
} else if(resultado > salario * 0.30){
    console.log("A prestação é maior que 30% do salário, empréstimo negado!")
} else{
    console.log("O emprestimo pode ser concedido, valor da parcela é de R$ ", resultado.toFixed(2))
}
