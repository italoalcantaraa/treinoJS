import prompt from 'prompt-sync';
let ler = prompt();

let Fatorial = 1;

console.log("Informe um número para calcularmos seu fatorial");
let nmr = Number(ler());

for(let pos = 1; pos <= nmr; pos++){
    Fatorial = Fatorial * pos;
}
console.log(`O fatorial de ${nmr} é: ${Fatorial}`);
