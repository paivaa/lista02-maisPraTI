const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** EXPECTATIVA DE VIDA DE UM FUMANTE ***************\n");

while (true) {
    console.log("Para encerrar o programa, digite Ctrl+C");

    let cigarrosDiarios = parseInt(prompt('Qual a quantidade de cigarros fumados por dia? '));

    if (validaInput(cigarrosDiarios)) { console.log(`Input Inválido.`); continue }

    let anosFumando = parseInt(prompt('Quantos anos você já fumou? '));
    if (validaInput(anosFumando)) { console.log(`Input Inválido.`); continue }

    // Calculando o total de cigarros fumados
    let totalCigarrosFumados = cigarrosDiarios * anosFumando * 365;

    // Calculando o total de minutos perdidos
    let minutosPerdidos = totalCigarrosFumados * 10;

    // Convertendo minutos em dias (1 dia = 1440 minutos)
    let diasPerdidos = minutosPerdidos / 1440;

    console.log("Quantidade de vida perdida (em dias): ", Math.round(diasPerdidos));

}

function validaInput(input) {
    return !input && input != 0;
}