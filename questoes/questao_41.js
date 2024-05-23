const prompt = require('prompt-sync')({sigint: true});

console.log("\n*********** ADD EMAIL ***************\n");

console.log("\nPara encerrar o programa, digite Ctrl+C");

let obj = {};

obj["nome"] = prompt(`Digite seu nome: `);
obj["idade"] = Number(prompt(`Digite sua idade: `));
console.log("Idade: "+ obj["idade"]);
obj["email"] = prompt(`Digite seu email: `);

console.table(obj);