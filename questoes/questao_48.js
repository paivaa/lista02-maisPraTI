function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {};

    // Adiciona os itens do inventarioLojaA ao inventarioCombinado
    for (let item in inventarioLojaA) {
        if (inventarioLojaA.hasOwnProperty(item)) {
            inventarioCombinado[item] = inventarioLojaA[item];
        }
    }

    // Adiciona os itens do inventarioLojaB ao inventarioCombinado
    for (let item in inventarioLojaB) {
        if (inventarioLojaB.hasOwnProperty(item)) {
            if (inventarioCombinado.hasOwnProperty(item)) {
                inventarioCombinado[item] += inventarioLojaB[item];
            } else {
                inventarioCombinado[item] = inventarioLojaB[item];
            }
        }
    }

    return inventarioCombinado;
}

// Exemplo de uso
const inventarioLojaA = {
    maça: 10,
    banana: 5,
    laranja: 8
};

const inventarioLojaB = {
    banana: 7,
    laranja: 10,
    uva: 15
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log(inventarioCombinado);
