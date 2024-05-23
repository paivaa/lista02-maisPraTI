const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** PAR OU IMPAR - 30 VALORES ***************\n");

console.log("\nPara encerrar o programa, digite Ctrl+C");

const NUMERO_TOTAL_DE_VEZES = 30;
const MAX_SIZE = 5;
let pares = [];
let impares = [];

for(let i=1; i<=30; i++){

    let numero = Number(prompt('Insira um número: '));
    
    if(!numero){ console.log(`\nInput Inválido.`); continue}

    if (numero % 2 === 0) {
        pares.push(numero);
        if (pares.length === MAX_SIZE) {
            console.log('Vetor de pares:', pares);
            pares = [];
        }
    } else {
        impares.push(numero);
        if (impares.length === MAX_SIZE) {
            console.log('Vetor de ímpares:', impares);
            impares = [];
        }
    }

}

console.log("Programa finalizado\n");

// Imprimir o que restou nos vetores
if (pares.length > 0) {
    console.log('Vetor de pares restante:', pares);
    console.log("\n");
}
if (impares.length > 0) {
    console.log('Vetor de ímpares restante:', impares);
}