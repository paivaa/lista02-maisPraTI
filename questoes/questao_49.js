function agruparTransacoesPorCategoria(transacoes) {
    const resultado = {};

    transacoes.forEach(transacao => {
        const { categoria, valor } = transacao;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += valor;
    });

    return resultado;
}

// Exemplo de uso
const transacoes = [
    { id: 1, valor: 100, data: '2024-05-01', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-05-02', categoria: 'Transporte' },
    { id: 3, valor: 80, data: '2024-05-03', categoria: 'Alimentação' },
    { id: 4, valor: 120, data: '2024-05-04', categoria: 'Lazer' },
    { id: 5, valor: 200, data: '2024-05-05', categoria: 'Transporte' },
    { id: 6, valor: 90, data: '2024-05-06', categoria: 'Alimentação' }
];

const transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);

console.log(transacoesAgrupadas);
