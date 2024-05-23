const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** CÁLCULO LIMITE DE VELOCIDADE ***************\n");

while (true) {
    console.log("\nPara encerrar o programa, digite Ctrl+C");

    let velocidade = parseFloat(prompt('Qual a velocidade do carro? '));

    if (validaInput(velocidade)) { console.log("\nInput Inválido."); continue }

    if(velocidade > 80){
        console.log("\nValor da multa (em R$): ", ((velocidade - 80)*5).toFixed(2) );
    }


}

function validaInput(input) {
    return (!input && input !=0) || input < 0;
}