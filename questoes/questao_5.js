const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** JOKENPO ***************\n");


while (true) {
    console.log("\nPara encerrar o programa, digite Ctrl+C");
    //os inputs estão ocultados para que o próximo jogador não veja o que o primeiro inputou
    let jkp1 = prompt('1º - pedra, papel ou tesoura? ', {echo: ''});

    if (validaInput(jkp1)) { console.log("\nInput Inválido."); continue }

    let jkp2 = prompt('2º pedra, papel ou tesoura? ', {echo: ''});

    if (validaInput(jkp2)) { console.log("\nInput Inválido."); continue }

    if(jkp1.toLowerCase() === "pedra" && jkp2.toLowerCase() == "tesoura"){
        console.log("\nVitória do primeiro jogador");
    }else if(jkp1.toLowerCase() === "pedra" && jkp2.toLowerCase() == "papel"){
        console.log("\nVitória do segundo jogador");
    }else if(jkp1.toLowerCase() === "tesoura" && jkp2.toLowerCase() == "papel"){
        console.log("\nVitória do primeiro jogador");
    }else if(jkp1.toLowerCase() === "tesoura" && jkp2.toLowerCase() == "pedra"){
        console.log("\nVitória do segundo jogador");
    }else if(jkp1.toLowerCase() === "papel" && jkp2.toLowerCase() == "pedra"){
        console.log("\nVitória do primeiro jogador");
    }else if(jkp1.toLowerCase() === "papel" && jkp2.toLowerCase() == "tesoura"){
        console.log("\nVitória do segundo jogador");
    }


}

function validaInput(input) {
    return input.toLowerCase() != "pedra" && input.toLowerCase() != "papel" && input.toLowerCase() != "tesoura";
}