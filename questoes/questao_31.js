function contarEFiltrarMatriz(A, matriz) {
    let count = 0;
    let matrizFiltrada = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                count++;
            } else {
                matrizFiltrada.push(matriz[i][j]);
            }
        }
    }

    return { count, matrizFiltrada };
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function imprimirVetor(vetor) {
    console.log(vetor.join(' '));
}

// Exemplo de leitura de matriz 30x30 e valor A
let A = 5; // Valor de exemplo para A

// Gerar uma matriz 30x30 com valores aleatórios entre 1 e 10
let matriz = [];
for (let i = 0; i < 30; i++) {
    let linha = [];
    for (let j = 0; j < 30; j++) {
        linha.push(Math.floor(Math.random() * 10) + 1); // Valores entre 1 e 10
    }
    matriz.push(linha);
}

console.log("Matriz V:");
imprimirMatriz(matriz);

let { count, matrizFiltrada } = contarEFiltrarMatriz(A, matriz);

console.log(`\nNúmero de elementos iguais a ${A}: ${count}`);
console.log("Matriz X (elementos diferentes de A):");
imprimirVetor(matrizFiltrada);
