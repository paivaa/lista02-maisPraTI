function calcularSomaColunas(matriz) {
    let numLinhas = matriz.length;
    let numColunas = matriz[0].length;
    let somaColunas = new Array(numColunas).fill(0);

    for (let j = 0; j < numColunas; j++) {
        for (let i = 0; i < numLinhas; i++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    return somaColunas;
}

function imprimirSomas(somas) {
    console.log(matriz);
    for (let j = 0; j < somas.length; j++) {
        console.log(`Soma da coluna ${j + 1}: ${somas[j].toFixed(2)}`);
    }
}

// Exemplo de matriz 15x20 com números reais
let matriz = [];
for (let i = 0; i < 15; i++) {
    let linha = [];
    for (let j = 0; j < 20; j++) {
        linha.push(Math.random() * 100); // Preenche a matriz com valores aleatórios entre 0 e 100
    }
    matriz.push(linha);
}

let somaColunas = calcularSomaColunas(matriz);
imprimirSomas(somaColunas), matriz;
