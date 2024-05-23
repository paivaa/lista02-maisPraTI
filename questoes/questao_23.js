function criarMatrizIdentidade(tamanho) {
    // Inicializa a matriz com zeros
    let matriz = [];
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            if (i === j) {
                matriz[i][j] = 1; // Elementos da diagonal principal são 1
            } else {
                matriz[i][j] = 0; // Elementos fora da diagonal principal são 0
            }
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

const tamanho = 7;
const matrizIdentidade = criarMatrizIdentidade(tamanho);
imprimirMatriz(matrizIdentidade);
