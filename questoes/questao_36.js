const prompt = require('prompt-sync')({sigint: true});

const GABARITO = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log("\n*********** LOTERIA PREMIADA ***************\n");

console.log("\nPara encerrar o programa, digite Ctrl+C");

const QNTD_APOSTADORES = 100;

for(let i=1; i<=QNTD_APOSTADORES; i++){
    let qndt_acerto = 0;

    for(let j=1; j<=13; j++){
        let numero = Number(prompt(`Insira o ${j}º número: `));
    
        if(!numero){ console.log(`\nInput Inválido. Tente novamente`); continue};
        
        GABARITO.includes(numero) ? qndt_acerto++ : ""
    }

    if(qndt_acerto == 13){
        console.log("Parabéns, tu foi o GANHADOR.");
        break;
    }

    console.log(`\nJogador #${i} - acertos: ${qndt_acerto}`)
    qndt_acerto = 0;
}