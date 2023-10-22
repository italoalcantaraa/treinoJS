//Implemente um programa que CALCULE A SOMA dos números naturais
// de 1 até um número informado pelo usuário

import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe um número");
let Num = Number(ler());

let sum = 0; 

for(let pos = 1; pos <= Num; pos ++){
     sum = sum + pos
}

console.log("A soma dos números é: " + sum);