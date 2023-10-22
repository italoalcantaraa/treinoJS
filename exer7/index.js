//Cálculo de potenciação de números naturais.

import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe o primeiro número');
let n1 = Number(ler());

console.log('Informe o segundo número');
let n2 = Number(ler());

let Potency = 1;

for(let pos = 0; pos <= n2; pos ++){
    Potency = n1 ** n2;
}

if(n1 < 0 || n1 < 0 ){
    console.log('Cálculo inválido')
}
else{
    console.log(Potency);    
}
