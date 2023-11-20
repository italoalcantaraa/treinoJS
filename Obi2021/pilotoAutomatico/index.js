/// Uma grande fábrica de carros elétricos está realizando melhorias no sistema de piloto automático e precisa da sua ajuda para implementar um programa que decida se um carro B, que está trafegando no meio de dois carros A e C, precisa acelerar, desacelerar ou manter a velocidade atual. Os carros são iguais e os sensores do piloto automático vão fornecer, como entrada, a posição atual da traseira dos três carros. Veja um exemplo na figura.

// A primeira linha da entrada contém um inteiro A. A segunda linha da entrada contém um inteiro B. A terceira linha da entrada contém um inteiro C. Os três inteiros representam as posições atuais das traseiras dos carros A, B e C, respectivamente.

// Saída
// Seu programa deve imprimir uma linha contendo um inteiro: 1 se o carro B precisa acelerar; -1 se precisa desacelerar; ou 0 se precisa manter a velocidade atual.

// Restrições

// 0 ≤ A < B < C ≤ 500

import prompt from 'prompt-sync';
let ler = prompt();


console.log('Informe a posiçao do veículo A');
let A = Number(ler());

console.log('Informe a posiçao do veículo B: ');
let B = Number(ler());

while(B <= A){
    B = Number(ler(`B deve ser maior q A 
Informe a posição de B: `));
}

console.log(`Informe a posição de C: `);
let C = Number(ler());

while(C <= B){
    C = Number(ler(`C deve ser maior q B
Informe a Posição de C: `));
}

if((B - A) < (C - B)) {
    console.log(1);
}
else if((B - A ) > (C - B)){
    console.log(-1)
}
else{
    console.log(0);
}
