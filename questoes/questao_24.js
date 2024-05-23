function contarNegativosPorLinha(matriz) {
    let contagemNegativos = [];

    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contador++;
            }
        }
        contagemNegativos.push(contador);
    }

    return contagemNegativos;
}

function imprimirArray(array) {
    array.forEach((element,index) => {
       console.log(`Posição ${index+1} - Nº elementos negativos: ${element}`) 
    });;
}

// Exemplo de matriz M[1..6, 1..8]
let matriz = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [9, 10, -11, 12, -13, 14, -15, 16],
    [-17, 18, 19, -20, 21, -22, 23, -24],
    [25, -26, 27, -28, 29, -30, 31, -32],
    [-33, 34, 35, 36, -37, 38, -39, 40]
];

let contagemNegativos = contarNegativosPorLinha(matriz);
imprimirArray(contagemNegativos);
