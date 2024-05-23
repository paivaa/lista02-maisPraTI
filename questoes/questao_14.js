const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** 7 NOMES ***************\n");

let arr_nomes = []
console.log("\nPara encerrar o programa, digite Ctrl+C");

while(true){
  
let nome = prompt('Digite um nome: ');

arr_nomes.unshift(nome);

if(arr_nomes.length == 7){break};
}

console.log(`\nNomes: ${arr_nomes.join(", ")}`);