function encontrarMaiorElementoEmModulo(linha) {
    let maiorElemento = Math.abs(linha[0]);
    for (let j = 1; j < linha.length; j++) {
        if (Math.abs(linha[j]) > maiorElemento) {
            maiorElemento = Math.abs(linha[j]);
        }
    }
    return maiorElemento;
}

function dividirLinhaPorMaiorElemento(linha, maiorElemento) {
    return linha.map(elemento => elemento / maiorElemento);
}

function dividirMatrizPorMaiorElemento(matriz) {
    let matrizModificada = [];
    for (let i = 0; i < matriz.length; i++) {
        let maiorElemento = encontrarMaiorElementoEmModulo(matriz[i]);
        matrizModificada.push(dividirLinhaPorMaiorElemento(matriz[i], maiorElemento));
    }
    return matrizModificada;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Exemplo de matriz 12x13 com valores de exemplo
let matriz = [
    [3, -5, 6, 7, -2, 8, 9, -1, 3, 4, 5, 6, 7],
    [11, -22, 13, -14, 15, 16, -17, 18, 19, -20, 21, -22, 23],
    [1, 2, 3, 4, -5, 6, 7, 8, 9, 10, 11, 12, 13],
    [13, -14, 15, 16, -17, 18, 19, 20, -21, 22, 23, 24, -25],
    [-2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14],
    [5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17],
    [6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18],
    [7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19],
    [8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20],
    [9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20, 21],
    [10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20, 21, -22],
    [11, -12, 13, -14, 15, -16, 17, -18, 19, -20, 21, -22, 23]
];

console.log("Matriz original M:");
imprimirMatriz(matriz);

let matrizModificada = dividirMatrizPorMaiorElemento(matriz);

console.log("\nMatriz modificada:");
imprimirMatriz(matrizModificada);
