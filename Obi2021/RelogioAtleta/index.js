import prompt from 'prompt-sync';
let ler = prompt();

console.log(`Informe a frquêcia cardíaca em repouso: `);
const Freq_Repouso = Number(ler());

console.log(`Informe a frequência Atual: `);
const Freq_Atual =Number(ler());

console.log(`Informe a capacida de oxigenação: `);
const Oxigenacao = Number(ler());

if(Freq_Atual > (Freq_Repouso * 3) || Oxigenacao < 95){
    console.log("Diminuir");
}
else if(Freq_Atual < (Freq_Repouso * 2) && Oxigenacao > 97){
    console.log("Aumentar")
}
else{
    console.log("Manter");
}