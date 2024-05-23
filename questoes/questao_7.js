const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** ALUGUEL DE CARROS ***************\n");

while(true){
console.log("\nPara encerrar o programa, digite Ctrl+C");
  
let tipoCarro = prompt('Tipo de carro alugado? (popular ou luxo): ');

if(validaInputTipoDeCarro(tipoCarro)){ console.log(`\nInput Inválido.`); continue}

let dias = parseInt(prompt('Quantos dias de aluguel? '));
if(validaInput(dias)){ console.log(`\nInput Inválido.`); continue}

let km = parseFloat(prompt('Quantos quilometros foram percorridos? '));
if(validaInput(km)){ console.log(`\nInput Inválido.`); continue}

if(tipoCarro === 'popular'){
  km <=100 ? console.log("Valor total (R$): "+((0.2*km)+(90*dias)).toFixed(2)) : console.log("Valor total (R$): "+((0.1*km)+(90*dias)).toFixed(2)) 
}else if(tipoCarro === 'luxo'){
  km <=200 ? console.log("Valor total (R$): "+((0.3*km)+(150*dias)).toFixed(2)) : console.log("Valor total (R$): "+((0.25*km)+(150*dias)).toFixed(2)) 
}

}

function validaInput(input){
  return !input || input < 0;
}

function validaInputTipoDeCarro(input){
  return input.toLowerCase() !== "popular" && input.toLowerCase() !== "luxo"
}