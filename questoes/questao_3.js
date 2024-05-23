const prompt = require('prompt-sync')({ sigint: true });

console.log("\n*********** CÁLCULO PASSAGEM ***************\n");

while (true) {
    console.log("\nPara encerrar o programa, digite Ctrl+C");

    let distancia = parseFloat(prompt('Qual distancia deseja percorrer (em KM)? '));

    if (validaInput(distancia)) { console.log("\nInput Inválido."); continue }

    if(distancia <= 200){
        console.log("\nValor da passagem (em R$): ", (distancia*0.5).toFixed(2) );
    }else{
        console.log("\nValor da passagem (em R$): ", (distancia*0.45).toFixed(2) );
    }


}

function validaInput(input) {
    return (!input && input !=0) || input < 0;
}