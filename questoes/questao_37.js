const prompt = require('prompt-sync')({sigint: true});

const GABARITO = {
    "1":"a",
    "2":"b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6":"a",
    "7":"c",
    "8":"d",
    "9":"e",
    "10":"c",
    "11":"a",
    "12":"c",
    "13":"d",
    "14":"e",
    "15":"c",
    "16":"a",
    "17":"c",
    "18":"d",
    "19":"e",
    "20":"c",
}

console.log("\n*********** GABARITO PROVA***************\n");

console.log("\nPara encerrar o programa, digite Ctrl+C");

const QNTD_ALUNOS = 50;

for(let i=1; i<=QNTD_ALUNOS; i++){
    let qndt_acerto = 0;

    for(let j=1; j<=20; j++){
        let questao = prompt(`Insira a resposta da ${j}º questão: `);
    
        if(validaInput(questao)){ console.log(`\nInput Inválido. Tente novamente`); continue};
        
        GABARITO[`${j}`] == questao ? qndt_acerto++ : ""
    }

    console.log("\nQuantidade de acertos: "+qndt_acerto);

    if(qndt_acerto >=12 ){
        console.log("Aprovado.");
        qndt_acerto = 0;
        continue;
    }

    console.log("Reprovado.");
    qndt_acerto = 0;
}



function validaInput(input){
    return input.toLowerCase().trim() != "a" && 
           input.toLowerCase().trim() != "b" &&
           input.toLowerCase().trim() != "c" &&
           input.toLowerCase().trim() != "d" &&
           input.toLowerCase().trim() != "e"
}