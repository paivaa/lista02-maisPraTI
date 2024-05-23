const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** FAÇA ENQUANTO ***************\n");

let numeros = [];

do{
    console.log('\n');

    let input = prompt('Digite um número: ');
    if(validaInput(input)){ console.log(`Input Inválido.`); continue}

    console.log('\n');

    numeros.push(parseInt(input));

    let confirmacao = prompt('Deseja continuar? Digite s para continuar ou digite qualquer tecla para encerrar ');
    if(confirmacao.toLocaleLowerCase() !== 's'){ break }
}while(true);

console.log("Programa encerrado com sucesso!\n");


let menorNumero = numeros.reduce(
    (acc, currentValue) => acc <= currentValue ? acc : currentValue
);

let somatorio = numeros.reduce(
    (acc, currentValue) => acc + currentValue,
    0
);

let media = somatorio/numeros.length;

let valoresPares = numeros.filter((valor) => valor % 2 == 0).length;

console.log(`Somatório: ${somatorio}`);
console.log(`Menor valor: ${menorNumero}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${valoresPares}`);

function validaInput(input){
    return (!input && input != 0);
}
