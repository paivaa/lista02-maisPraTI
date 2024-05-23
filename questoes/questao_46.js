function totalVendasPorVendedor(vendas) {
    const resultado = {};

    vendas.forEach(venda => {
        const { vendedor, valor } = venda;
        if (resultado[vendedor]) {
            resultado[vendedor] += valor;
        } else {
            resultado[vendedor] = valor;
        }
    });

    return resultado;
}

// Exemplo de uso
const vendas = [
    { vendedor: "Alice", valor: 120 },
    { vendedor: "Bob", valor: 150 },
    { vendedor: "Alice", valor: 90 },
    { vendedor: "Charlie", valor: 180 },
    { vendedor: "Bob", valor: 200 },
    { vendedor: "Alice", valor: 130 }
];

const totalPorVendedor = totalVendasPorVendedor(vendas);

console.log(totalPorVendedor);
