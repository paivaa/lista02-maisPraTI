function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][matriz.length - 1 - i];
    }
    return soma / matriz.length;
}

function multiplicarDiagonalPrincipalPorMediaDiagonalSecundaria(matriz, mediaDiagonalSecundaria) {
    for (let i = 0; i < matriz.length; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Leitura da matriz 3x3
let matriz = [];
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        // Aqui você pode implementar a lógica para ler os elementos da matriz
        // Vou inicializá-la com valores de exemplo para simplificar
        linha.push((i + 1) * (j + 1)); // Exemplo de valores
    }
    matriz.push(linha);
}

console.log("Matriz original:");
imprimirMatriz(matriz);

let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);
console.log("\nMédia dos elementos da diagonal secundária:", mediaDiagonalSecundaria);

multiplicarDiagonalPrincipalPorMediaDiagonalSecundaria(matriz, mediaDiagonalSecundaria);
console.log("\nMatriz após a multiplicação:");
imprimirMatriz(matriz);
