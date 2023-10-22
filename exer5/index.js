// implemente um programa que calcule o fatorial de um número
// informado pelo user

import prompt from 'prompt-sync';
let ler = prompt();

let Factorial = 1;

console.log("Informe um número");
let Num = Number(ler());

for(let pos = 1; pos <= Num; pos ++ ){
    Factorial = Factorial * pos;
}

console.log("O fatorial é: " + Factorial);