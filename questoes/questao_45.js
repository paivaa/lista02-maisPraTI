function contarOcorrencias(array) {
    const resultado = {};

    array.forEach(str => {
        if (resultado[str]) {
            resultado[str]++;
        } else {
            resultado[str] = 1;
        }
    });

    return resultado;
}

// Exemplo de uso
const arrayDeStrings = [
    "maçã", "banana", "laranja", "maçã", "banana", "maçã",
    "uva", "pera", "laranja", "laranja", "uva", "uva", "uva"
];

const contagem = contarOcorrencias(arrayDeStrings);

console.log(contagem);
