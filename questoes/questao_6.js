const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** DESCUBRA O NÚMERO 1-5 ***************\n");

console.log("\nPara encerrar o programa, digite Ctrl+C");

let numeroSorteado = geraNumeroInt(1, 5);

let tentativa = 1;

while (true) {

let numeroEscolhido = parseInt(prompt('Advinhe o número inteiro entre 1 e 5: '));

if (validaInput(numeroEscolhido)) { console.log("\nInput Inválido."); continue }

console.log(`${tentativa}º Tentativa`)

    if(numeroEscolhido > numeroSorteado){
        console.log("\nO número é menor");
        tentativa++
        continue;
    }else if(numeroEscolhido < numeroSorteado){
        console.log("\nO número é maior");
        tentativa++
        continue;
    }

    console.log("\nAcertou! Parabéns");
    break;
}

function validaInput(input) {
    return !input || input < 0 || input > 5;
}

function geraNumeroInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }