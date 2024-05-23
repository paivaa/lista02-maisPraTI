const prompt = require("prompt-sync")({ sigint: true });

console.log("\n*********** PROGRESSÃO ARITMÉTICA ***************\n");

let soma = 0;

console.log("\nPara encerrar o programa, digite Ctrl+C");

let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
if (validaInputPrimeiroTermo(primeiroTermo)) {
  console.log(`\nInput Inválido.`);
  return;
}

let razao = parseFloat(prompt("Digite a razão da PA: "));
if (validaInput(razao)) {
  console.log(`\nInput Inválido.`);
  return;
}

console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
  const elemento = primeiroTermo + i * razao;
  console.log(`Elemento ${i + 1}: ${elemento}`);
  soma += elemento;
}

console.log('A soma dos elementos da PA é:', soma);

function validaInputPrimeiroTermo(input) {
  return !input && input != 0;
}

function validaInput(input) {
  return (!input && input != 0) || input < 0;
}
