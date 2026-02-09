const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite o salário: "));
const anosTrabalhados = Number(prompt("Digite o tempo de empresa: "));

const quadrienios = Math.floor(anosTrabalhados / 4);
const adicional = salario * (quadrienios / 100);
const salarioFinal = salario + adicional;

console.log(`Salário final seu será: ${salarioFinal.toFixed(2)}`);
console.log(`Porcentagem do salário adicionado: ${(quadrienios)}%`);