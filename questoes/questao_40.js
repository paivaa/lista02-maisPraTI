const prompt = require('prompt-sync')({sigint: true});

const GABARITO = [1,2,3,4,5];

console.log("\n*********** LOTO MANIA ***************\n");

console.log("\nPara encerrar o programa, digite Ctrl+C");

const QNTD_APOSTADORES = 50;

for(let i=1; i<=QNTD_APOSTADORES; i++){
    let qndt_acerto = 0;

    for(let j=1; j<=5; j++){
        let numero = Number(prompt(`Insira o ${j}º número: `));
    
        if(!numero){ console.log(`\nInput Inválido. Tente novamente`); continue};
        
        GABARITO.includes(numero) ? qndt_acerto++ : ""
    }

    if(qndt_acerto == 5){
        console.log(`Jogador #${i} - GANHADOR`);
        break;
    }

    console.log("\n");
    qndt_acerto = 0;
}