// Função para criar uma matriz 50x50 com números aleatórios entre 1 e 100
function criarMatrizAleatoria() {
    let matriz = [];
    for (let i = 0; i < 50; i++) {
        let linha = [];
        for (let j = 0; j < 50; j++) {
            linha.push(Math.random() * 100); // Números aleatórios entre 0 e 100
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para multiplicar cada linha pelo elemento correspondente da diagonal principal
function multiplicarLinhaPeloElementoDiagonal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let elementoDiagonal = matriz[i][i]; // Elemento da diagonal principal da linha
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= elementoDiagonal; // Multiplica cada elemento da linha pelo elemento diagonal
        }
    }
}

// Função para imprimir a matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Criar e imprimir a matriz original
let matriz = criarMatrizAleatoria();
console.log("Matriz original:");
imprimirMatriz(matriz);

// Multiplicar cada linha pelo elemento da diagonal principal
multiplicarLinhaPeloElementoDiagonal(matriz);

// Imprimir a matriz após as multiplicações
console.log("\nMatriz após multiplicação:");
imprimirMatriz(matriz);
