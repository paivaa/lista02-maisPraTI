function contarPropriedadesString(obj) {
    let contador = 0;
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            contador++;
        }
    }
    return contador;
}

// Exemplo de uso
const exemploObjeto = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    cidade: "São Paulo",
    hobbies: ["ler", "caminhar", "viajar"],
    ativo: true
};

const numeroDeStrings = contarPropriedadesString(exemploObjeto);

console.log(`Número de propriedades do tipo string: ${numeroDeStrings}`);
