//Media de notas

import prompt from 'prompt-sync';
let ler = prompt();

let TypedNotes = [];
let Sum = 0;

let Amount = '';

while(Amount === ''){
    Amount = ler("Informe a quantidade de notas ");
}

for (let pos = 1; pos <= Amount; pos++) {
    console.log("nota " + pos);
    TypedNotes[pos] = Number(ler());
}

for (let pos = 1; pos <= Amount; pos++) {
    Sum = Sum + TypedNotes[pos];
}

let Avarage = Sum / Amount;

console.log(`Sua média é ${Avarage}`)