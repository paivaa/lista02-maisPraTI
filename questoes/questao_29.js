function somaLinha(matriz, linha) {
    let soma = 0;
    for (let j = 0; j < matriz[linha].length; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}

function somaColuna(matriz, coluna) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

function somaTotal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Exemplo de matriz 5x5 com valores de exemplo
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let somaLinha4 = somaLinha(matriz, 3); // 4ª linha (índice 3)
let somaColuna2 = somaColuna(matriz, 1); // 2ª coluna (índice 1)
let somaDiagPrincipal = somaDiagonalPrincipal(matriz);
let somaTodosElementos = somaTotal(matriz);

console.log("Matriz M:");
imprimirMatriz(matriz);
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagPrincipal}`);
console.log(`Soma de todos os elementos: ${somaTodosElementos}`);
