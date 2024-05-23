const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** PREFEITURA ***************\n");


console.log("\nPara encerrar o programa, digite Ctrl+C");

let arr_cidadaos = [];

while (true) {

    let cidadao = {};

    cidadao.numero_filhos = parseInt(prompt('Digite o número de filhos: '));
    cidadao.salario = parseFloat(prompt('Digite seu salario: ').replace(",", "."));
    console.log(`\n`)

    arr_cidadaos.push(cidadao);

    console.log("\n");

    let salario_total = arr_cidadaos.reduce((acc, current) => acc + current.salario, 0);
    let total_numero_filhos = arr_cidadaos.reduce((acc, current) => acc + current.numero_filhos, 0);
    let qntd_pessoas_com_salario_ate_350 = arr_cidadaos.filter((cidadao) => cidadao.salario <= 350).length
    let maior_salario = arr_cidadaos.map((cidadao) => cidadao.salario).sort((a, b) => a - b).pop();

    console.log(`Média salario total: ${(salario_total / arr_cidadaos.length).toFixed(2)}`);
    console.log(`Média quantidade de filhos total: ${(total_numero_filhos / arr_cidadaos.length).toFixed(2)}`);
    console.log(`Percentual salario até R$350: % ${(qntd_pessoas_com_salario_ate_350 / arr_cidadaos.length).toFixed(2)}`);
    console.log(`O maior salario: R$ ${maior_salario}`);

    console.log(`\n`)
}