import prompt from 'prompt-sync';
let ler = prompt();


console.log("Informe o primero número");
let n1 = Number(ler());

console.log("Informe o segundo número");
let n2 = Number(ler());

console.log("Informe o terceiro número");
let n3 = Number(ler());

let calc = (n1 +n2 + n3) / 3;

console.log("A sua média é:" + calc.toFixed(2));
