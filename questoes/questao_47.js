function transformarObjeto(obj, fn) {
    const resultado = {};

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            resultado[chave] = fn(obj[chave]);
        }
    }

    return resultado;
}

// Exemplo de uso
const objetoEntrada = {
    a: 1,
    b: 2,
    c: 3
};

const funcaoTransformacao = (valor) => valor * 2;

const objetoTransformado = transformarObjeto(objetoEntrada, funcaoTransformacao);

console.log(objetoTransformado);
