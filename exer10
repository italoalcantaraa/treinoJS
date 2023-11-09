import prompt from 'prompt-sync';
let ler = prompt();

let Limit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let nmr = '';
let sortear = Math.floor(Math.random() * Limit.length);

console.log("Seja bem-vindo(a) ao jogo de adivinhar o número!");

while (nmr != sortear) {
    if (nmr < sortear) {
        if(nmr > 0){
            console.log("É maior!")
        }
        nmr = ler('Informe um número:');
    }
    else if (nmr > sortear) {
        console.log(`É menor!`);
        nmr = ler(`Informe um número: `);
    }
}

console.log("voce acertou!" + " O número sorteado foi: " + nmr);
