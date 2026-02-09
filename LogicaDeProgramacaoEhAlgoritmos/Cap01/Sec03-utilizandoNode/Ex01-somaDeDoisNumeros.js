const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));

const soma = numero1 + numero2;

console.log(`A soma de ${numero1} e ${numero2} é: ${soma}`);
