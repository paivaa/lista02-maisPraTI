const prompt = require('prompt-sync')({sigint: true});

// Função para ler um vetor de 6 posições
function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 6; i++) {
        let valor = parseFloat(prompt(`Digite o valor para a posição ${i + 1}: `));
        vetor.push(valor);
    }
    return vetor;
}

// Função para realizar operações no vetor
function operacoesVetor(vetor, operacao) {
    switch (operacao) {
        case 1:
            const soma = vetor.reduce((acc, val) => acc + val, 0);
            console.log('Soma dos elementos:', soma);
            break;
        case 2:
            const produto = vetor.reduce((acc, val) => acc * val, 1);
            console.log('Produto dos elementos:', produto);
            break;
        case 3:
            const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
            console.log('Média dos elementos:', media);
            break;
        case 4:
            const ordenado = [...vetor].sort((a, b) => a - b);
            console.log('Vetor ordenado em ordem crescente:', ordenado);
            break;
        case 5:
            console.log('Vetor:', vetor);
            break;
        default:
            console.log('Operação inválida.');
    }
}

// Função principal
function main() {
    let vetor = lerVetor();
    let operacao = parseInt(prompt('Digite a operação desejada (1: soma, 2: produto, 3: média, 4: ordenar, 5: mostrar vetor): '));
    operacoesVetor(vetor, operacao);
}

// Executa o programa
main();
