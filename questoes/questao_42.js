// Definindo o objeto 'dados' com várias propriedades
const dados = {
    nome: "João",
    idade: 30,
    hobbies: ["ler", "caminhar", "viajar"],
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo"
    },
    notas: [10, 9.5, 8.7],
    ativo: true,
    contatos: ["joao@example.com", "555-1234"],
    projetos: {
        titulo: "Projeto X",
        prazo: "2024-12-31"
    },
    amigos: ["Ana", "Carlos", "Maria"]
};

// Função que retorna um novo objeto apenas com as propriedades que são arrays
function filtrarPropriedadesArray(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

// Chamando a função e armazenando o resultado
const propriedadesArrays = filtrarPropriedadesArray(dados);

// Exibindo o objeto resultante
console.log(propriedadesArrays);
