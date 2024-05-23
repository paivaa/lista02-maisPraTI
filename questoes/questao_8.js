const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** PROGRAMA VIDA SAÚDAVEL ***************\n");

while(true){
console.log("\nPara encerrar o programa, digite Ctrl+C");
  
let horasAtividades = parseFloat(prompt('Quantas horas de atividade você teve no mês? '));
if(validaInput(horasAtividades)){ console.log(`\nInput Inválido.`); continue}

let pontos = 0;

if(horasAtividades <= 10){
    pontos = 2*horasAtividades;
}else if(horasAtividades > 10 && horasAtividades <= 20){
    pontos = 5*horasAtividades;
}else if(horasAtividades > 20){
    pontos = 10*horasAtividades;
} 

let faturamento = pontos*0.05;

console.log(`\nVocê ganhou ${pontos} pontos e faturou R$ ${faturamento.toFixed(2)}`);
}

function validaInput(input){
  return !input || input < 0;
}