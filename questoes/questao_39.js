// Função para gerar um vetor de exemplo com 100 posições
function gerarVetorExemplo() {
    return [
        5, -3, 0, 7, 9, 0, 15, -8, 22, 1,
        3, 0, -2, 14, 8, 0, 0, 6, -5, 2,
        11, 0, 0, 4, -1, 10, 18, 0, -4, 13,
        16, 7, -3, 0, 0, 20, 25, -6, 30, 2,
        0, 0, -7, 5, 8, 9, 0, 0, 0, 14,
        -2, 19, 0, 6, 3, 0, -5, 0, 4, 17,
        12, 0, 0, 11, -3, 15, 0, 0, 7, 0,
        -1, 8, 0, 0, 6, 20, 0, 0, -4, 1,
        0, 0, 0, 5, 9, 10, -6, 7, 2, 0,
        0, -8, 4, 0, 3, 12, -9, 0, 14, 0
    ];
}

// Função para compactar o vetor removendo valores nulos e negativos
function compactarVetor(vetor) {
    return vetor.filter(valor => valor > 0);
}

// Função principal
function main() {
    let vetorA = gerarVetorExemplo();
    let vetorB = compactarVetor(vetorA);

    console.log('Vetor original (A):', vetorA);
    console.log('Vetor compactado (B):', vetorB);
}

// Executa o programa
main();