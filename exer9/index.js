//Verificar se a palavra é um palíndromo

import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe uma palvra");
let Word = ler();

let CheckWord =  '';

for(let pos = Word.length - 1; pos >= 0; pos --){
    CheckWord += Word[pos];
}
if(CheckWord === Word){
    console.log(`${Word} é um palíndromo`)
}
else{
    console.log(`${Word} não é um palíndromo`);
}
