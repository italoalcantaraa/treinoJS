//Repetir mensagem se a senha não cumprir as exigências  

import prompt from 'prompt-sync';
let ler = prompt();

let Limit = '';

while(Limit.length != 6){
    console.log('Sua senha deve conter 6 caracteres');
    Limit = ler('Digite a senha:');

}
console.log("Sua senha é:" + Limit);