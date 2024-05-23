const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** CHECK TRIANGULO ***************\n");

while(true){
console.log("\nPara encerrar o programa, digite Ctrl+C");
  
let a = parseFloat(prompt('Digite o valor do 1° lado do triangulo: '));

if(validaInput(a)){ console.log(`\nInput Inválido.`); continue}

let b = parseFloat(prompt('Digite o valor do 2° lado do triangulo: '));
if(validaInput(b)){ console.log(`\nInput Inválido.`); continue}

let c = parseFloat(prompt('Digite o valor do 3° lado do triangulo: '));
if(validaInput(c)){ console.log(`\nInput Inválido.`); continue}

if(!formaTriangulo(a, b, c)){ console.log(`\nNão forma um triangulo. Tente novamente.`); continue }

console.log(`\nForma um triangulo.`);

}

function validaInput(input){
  return !input || input < 0;
}

function formaTriangulo(a, b, c){
  return a < b+c && b < a+c && c < b+a
}