function combinarObjetos(obj1, obj2) {
    // Combina obj1 e obj2, onde propriedades de obj2 têm precedência
    return { ...obj1, ...obj2 };
}

// Exemplo de uso
const obj1 = {
    nome: "João",
    idade: 30,
    hobbies: ["ler", "caminhar"]
};

const obj2 = {
    idade: 25,
    profissao: "Engenheiro",
    hobbies: ["viajar"]
};

const combinado = combinarObjetos(obj1, obj2);

console.log(combinado);
