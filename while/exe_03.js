//Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.

var rs = require("readline-sync")
var cont = 1

while(cont < 100){
  
    if(cont % 2 != 0){
        console.log(cont)
        cont++
    }
    else{
        cont++
    }
    
}

