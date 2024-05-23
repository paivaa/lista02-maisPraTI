const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** PESO IDEAL ***************\n");

while(true){
    console.log("\nPara encerrar o programa, digite Ctrl+C");



    let sexo = prompt('Digite (M) para masculino e (F) para feminino: ');
    if(validaSexo(sexo)){ console.log(`\nInput Inválido.`); continue;}
    
    let altura = parseFloat(prompt('Digite sua altura: ').replace(",","."));
    if(validaInput(altura)){ console.log(`\nInput Inválido.`); continue;}

    sexo.toLowerCase() === 'm' ? console.log(`O peso ideal é ${(72.7*altura-58).toFixed(2)}`) : console.log(`O peso ideal é ${(62.1*altura-44.7).toFixed(2)}`)
 

}

function validaInput(input){
    return !input || input < 0;
}


function validaSexo(input){
    return input.toLowerCase() != "m" && input.toLowerCase() != "f"
}