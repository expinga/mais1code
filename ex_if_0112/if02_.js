// 2. Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
// para Fahrenheit ou Fahrenheit para Celsius.

var rs = require("readline-sync")

temperatura = rs.questionFloat("Informe a temperatura desejada: ")

medida = rs.question("Digite a unidade de medida, C = Celsius ou F = Fahrenheit: ")

conversao = rs.question("Para converter sua temperatura digite: C = Celsius ou F = Fahrenheit ")


if(conversao == "f" || "F" && medida == "c" || "C"){
    temperatura = (9/5) * temperatura + 32
    console.log("A temperatura convertida é:", temperatura,"Fahrenheit")
}else if(conversao == "c" || "C" && medida == "f" || "F"){
    temperatura = (temperatura - 32) * 5/9 
    console.log("A temperatura convertida é:", temperatura,"Celsius")
}



