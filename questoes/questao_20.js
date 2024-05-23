const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** FOLHA DE PAGAMENTO MENSAL ***************\n");


console.log("\nPara encerrar o programa, digite Ctrl+C");

let arr_funcionarios = [];

for (let i = 1; i < 81; i++) {
    let funcionario = {};
    funcionario.nome = prompt('Digite seu nome: ');
    funcionario.cargo = prompt('Digite seu cargo: ');
    funcionario.salario_bruto = parseFloat(prompt('Digite seu salario: ').replace(",", "."));
    console.log(`\n`)
    funcionario.deducao_inss = ((funcionario.salario_bruto * 12) / 100).toFixed(2)
    funcionario.salario_liquido = funcionario.salario_bruto - funcionario.deducao_inss

    arr_funcionarios.push(funcionario);
}

console.log("\n");

console.table(arr_funcionarios);