function multiplicarMatrizPorEscalar(matriz, escalar) {
    let arrayResultado = [];
    let numLinhas = matriz.length;
    let numColunas = matriz[0].length;

    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numColunas; j++) {
            arrayResultado.push(matriz[i][j] * escalar);
        }
    }

    return arrayResultado;
}

function imprimirArray(array) {
    console.log(array.join(' '));
}

// Exemplo de leitura de matriz M(6,6) e valor A
let M = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

let A = 2; // Valor de exemplo para A

let V = multiplicarMatrizPorEscalar(M, A);
imprimirArray(V);
