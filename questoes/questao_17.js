const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** PESSOA MENOR DE IDADE ***************\n");

while(true){
    console.log("\nPara encerrar o programa, digite Ctrl+C");

    let arr_macro = [];

    for(let i=1; i<10 ; i++){
        let nome = prompt('Digite seu nome: ');
        let idade = parseInt(prompt('Digite sua idade: '));
        if(validaInput(idade)){ console.log(`\nInput Inválido.`); i-- ; continue;}
        arr_macro.push([nome, idade]);
    }

    arr_macro.forEach(function (pessoa){ 
        if(pessoa[1] < 18){
            console.log(`\nPessoa ${pessoa[0]} - idade ${pessoa[1]} `);
        }
    })
}


function validaInput(input){
    return !input;
}