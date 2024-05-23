const prompt = require('prompt-sync')();

console.log("\n*********** ORDENAR ARRAY ***************\n");


let arr_numeros = [];

for (let i = 1; i < 21; i++) {
    let numero = geraNumeroInt(0, 99);
    arr_numeros.push(numero);
}

console.table(arr_numeros.sort((a, b) => a - b));


function geraNumeroInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}