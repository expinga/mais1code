/*5. (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros 
(considere que não serão lidos valores iguais) 
e escrevê-los em ordem crescente. */

var rs = require("readline-sync")

var n1 = rs.question("Informe o primeiro número ") 
var n2 = rs.question("Informe o segundo número ")  
var n3 = rs.question("informe o terceiro número ") 
var menor
var meio 
var maior

if (n1 > n2 && n2 > n3) {
    console.log(n3 +" "+ n2 + " " + n1)
}else if (n2 > n1 && n1 > n3) {
    console.log(n3 +" "+ n1 + " " + n2)
}else if (n3 > n1 && n1 > n2) {
    console.log(n2 +" "+ n1 + " " + n3)
}else if (n1 > n3 && n3 > n2) {
    console.log(n2 +" "+ n3 + " " + n1)
}else if (n2 > n3 && n3 > n1) {
    console.log(n1 +" "+ n3 + " " + n2)
}else {
    console.log(n1 +" "+ n2 + " " + n3)
}
// if (n1 > n2 && n1 > n3) {
//     maior = n1
//     if (n2 > n3) {
//         meio = n2
//         menor = n3
//     }else{
//         meio = n3
//         menor = n2
//     }
//     console.log(menor, meio, maior)
 
// } else if (n2 > n1 && n2 > n3) {
//     maior = n2
//     if (n1 > n3) {
//         meio = n1
//         menor = n3
//     } else{
//         meio = n3
//         menor = n1
//     }
//     console.log(menor, meio, maior)

// } else if (n3 > n1 && n3 > n2) {
//     maior = n3
//     if (n2 > n1) {
//         meio = n2
//         menor = n1
//     } else{
//         meio = n1
//         menor = n2
//     }
//     console.log(menor, meio, maior)
// }









// if((n1 > n2) && (n1 > n3)){
//     maior = n1
//     if(n2 < n3){
//         meio = n3
//         menor = n2
//     }
//     else{
//         meio = n2
//         menor = n3
//     }
// } else if ((n2 > n1) && (n2 > n3)){
//     maior = n2
//     if(n1 < n3){
//         meio = n3
//         menor = n1
//     }
//     else{
//         meio = n1
//         menor = n3
//     }
    
    
// }

// console.log(maior, meio, menor)




