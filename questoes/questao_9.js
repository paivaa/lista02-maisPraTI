const prompt = require('prompt-sync')();

console.log("\n*********** SALÁRIO - FUNCIONÁRIOS ***************\n");

let arr_masculino = [];
let arr_feminino = [];

while(true){
console.log('\n');

let sexo = prompt('O funcionário é masculino ou feminino? Digite M ou F, respectivamente ');
if(validaInputSexo(sexo)){ console.log(`Input Inválido.`); continue}

console.log('\n');

let salario = parseFloat(prompt('Digite o salário: ').replace(",","."));
if(validaInput(salario)){ console.log(`Input Inválido.`); continue}

sexo === 'm' ? arr_masculino.push(salario) : arr_feminino.push(salario);

console.log('\n');

let confirmacao = prompt('Deseja continuar? Digite s para continuar ou digite qualquer tecla para encerrar ');
if(confirmacao.toLocaleLowerCase() !== 's'){ break }

}

console.log("Programa encerrado com sucesso!\n");

console.log(`Funcionários: ${arr_masculino}`);
console.log(`Funcionárias: ${arr_feminino}`);

function validaInput(input){
  return (!input && input != 0) || input < 0;
}

function validaInputSexo(input){
    return input.toLowerCase() !== 'm' && input.toLowerCase() !== 'f';
}