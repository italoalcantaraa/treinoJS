//Inverter palavra

import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite uma palavra");
let Word = ler();

let Reverse = '';

for(let cont = Word.length - 1; cont >= 0; cont -- ){
    Reverse += Word[cont];
}
console.log(Reverse) 