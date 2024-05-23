function calcularMatrizProduto(A, B) {
    let numLinhas = A.length;
    let numColunas = A[0].length;
    let P = [];

    for (let i = 0; i < numLinhas; i++) {
        P[i] = [];
        for (let j = 0; j < numColunas; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }

    return P;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Exemplo de matrizes A e B
let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let B = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1]
];

let P = calcularMatrizProduto(A, B);
imprimirMatriz(P);
