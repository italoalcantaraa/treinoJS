//Crie uma função que receba um número inteiro como argumento e retorne "Par" 
//para números pares ou "Ímpar" para números ímpares.

import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe o primero número");
let n1 = Number(ler());

console.log("Informe o segundo número");
let n2 = Number(ler());

if(n1 % 2 == 0){
    console.log( n1 + " É par")
}
else{
    console.log( n1 + " É ímpar")
}
if(n2 % 2 == 0){
    console.log( n2 + " É par")
}
else{
    console.log( n2 + " É ímpar")
}