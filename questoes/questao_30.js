function somarLinhas(matriz) {
    let somasLinhas = [];
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        somasLinhas.push(soma);
    }
    return somasLinhas;
}

function somarColunas(matriz) {
    let numColunas = matriz[0].length;
    let somasColunas = new Array(numColunas).fill(0);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somasColunas[j] += matriz[i][j];
        }
    }

    return somasColunas;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function imprimirVetor(vetor, nome) {
    console.log(`${nome}: ${vetor.join(' ')}`);
}

// Exemplo de matriz 5x5 com valores de exemplo
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let SL = somarLinhas(matriz);
let SC = somarColunas(matriz);

console.log("Matriz M:");
imprimirMatriz(matriz);
imprimirVetor(SL, 'SL');
imprimirVetor(SC, 'SC');
