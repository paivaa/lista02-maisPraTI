const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** FUNCIONÁRIO ***************\n");

while(true){
    console.log("\nPara encerrar o programa, digite Ctrl+C");

    let funcionario = {};

    funcionario.nome = prompt('Digite seu nome: ');
    funcionario.cargo = prompt('Digite seu cargo: ');
    funcionario.salario = parseFloat(prompt('Digite seu salario: ').replace(",","."));

    console.log("\n");

    console.table(funcionario);

}