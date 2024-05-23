// Importa a biblioteca prompt-sync para poder capturar entradas do usuário
const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** HORÁRIO FORMATADO ***************\n");

function lerEValidarHorario() {
    let horario;
    let valido = false;

    while (!valido) {
        
        horario = prompt('Digite um horário (HH:MM:SS): ');
        // Regex para validar o formato HH:MM:SS
        valido = /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/.test(horario);

        if (!valido) {
            console.log(`\nHorário inválido, tente novamente.`);
        }
    }

    return horario;
}

const horarios = [];

console.log('Digite 5 horários no formato HH:MM:SS');

for (let i = 1; i < 6; i++) {
    const horario = lerEValidarHorario();
    // Converte HH:MM:SS para HH.MM.SS
    const horarioFormatado = horario.replace(/:/g, '.');
    horarios.push(horarioFormatado);
}

console.log(`\nHorários formatados:`);
console.table(horarios);