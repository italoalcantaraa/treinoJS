import prompt from 'prompt-sync';
let ler = prompt();

let Limit = '';

while(Limit.length != 6){
    console.log("Sua senha de conter 6 caracteres");
    Limit = ler("Informe sua senha: ")
} 
console.log(`Sua senha é: ${Limit}`);