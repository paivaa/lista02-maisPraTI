const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** NUMERO PAR E POSIÇÃO NO ARRAY ***************\n");

while(true){
    console.log("\nPara encerrar o programa, digite Ctrl+C");

    let arr_numeros = [];

    for(let i=1; i<11 ; i++){
        let numero = parseInt(prompt('Digite um número: '));
        if(validaInput(numero)){ console.log(`\nInput Inválido.`); i-- ; continue;}
        arr_numeros.push(numero);
    }

    arr_numeros.forEach(function (numero, index){ 
        if(numero % 2 == 0){
            console.log(`\nNúmero ${numero} é par e está na posição ${index} do array`);
        }
    })
}


function validaInput(input){
    return (!input && input != 0);
}