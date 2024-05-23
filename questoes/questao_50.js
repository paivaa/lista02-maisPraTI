const prompt = require('prompt-sync')();

// Estrutura de dados
const hoteis = [];
const reservas = [];

// Funções
function adicionarHotel() {
    const id = hoteis.length + 1;
    const nome = prompt('Nome do hotel: ');
    const cidade = prompt('Cidade do hotel: ');
    const quartosTotais = parseInt(prompt('Número total de quartos: '));
    const quartosDisponiveis = quartosTotais;

    const hotel = {
        id,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis
    };

    hoteis.push(hotel);
    console.log('Hotel adicionado com sucesso!\n');
}

function buscarHoteisPorCidade() {
    const cidade = prompt('Digite a cidade para buscar hotéis: ');
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);

    if (hoteisNaCidade.length === 0) {
        console.log('Não há hotéis disponíveis nessa cidade.\n');
    } else {
        console.log('Hotéis disponíveis em', cidade + ':');
        hoteisNaCidade.forEach(hotel => {
            console.log(`${hotel.nome} - Quartos disponíveis: ${hotel.quartosDisponiveis}`);
        });
        console.log('');
    }
}

function fazerReserva() {
    const idHotel = parseInt(prompt('Digite o ID do hotel para fazer a reserva: '));
    const hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (!hotel) {
        console.log('Hotel não encontrado.\n');
        return;
    }

    if (hotel.quartosDisponiveis === 0) {
        console.log('Não há quartos disponíveis neste hotel.\n');
        return;
    }

    const nomeCliente = prompt('Digite seu nome para fazer a reserva: ');
    const idReserva = reservas.length + 1;

    reservas.push({ idReserva, idHotel, nomeCliente });
    hotel.quartosDisponiveis--;

    console.log('Reserva feita com sucesso!\n');
}

function cancelarReserva() {
    const idReserva = parseInt(prompt('Digite o ID da reserva para cancelar: '));
    const reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);

    if (reservaIndex === -1) {
        console.log('Reserva não encontrada.\n');
        return;
    }

    const reserva = reservas[reservaIndex];
    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

    reservas.splice(reservaIndex, 1);
    hotel.quartosDisponiveis++;

    console.log('Reserva cancelada com sucesso!\n');
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log('Não há reservas.\n');
        return;
    }

    console.log('Lista de reservas:');
    reservas.forEach(reserva => {
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log(`ID da reserva: ${reserva.idReserva} - Cliente: ${reserva.nomeCliente} - Hotel: ${hotel.nome} - Cidade: ${hotel.cidade}`);
    });
    console.log('');
}

// Execução
while (true) {
    console.log('1. Adicionar hotel');
    console.log('2. Buscar hotéis por cidade');
    console.log('3. Fazer reserva');
    console.log('4. Cancelar reserva');
    console.log('5. Listar reservas');
    console.log('6. Sair\n');

    const opcao = parseInt(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            adicionarHotel();
            break;
        case 2:
            buscarHoteisPorCidade();
            break;
        case 3:
            fazerReserva();
            break;
        case 4:
            cancelarReserva();
            break;
        case 5:
            listarReservas();
            break;
        case 6:
            console.log('Saindo do sistema.');
            return;
        default:
            console.log('Opção inválida. Por favor, escolha uma opção válida.\n');
    }
}
