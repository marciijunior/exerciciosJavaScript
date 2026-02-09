const prompt = require("prompt-sync")();

const consumo = Number(prompt("Quantas gramas seu gato consome por dia?"));
const pesoEmQuilos = Number(prompt("Quantos quilos tem o pacote de ração?"));

const duracao = (pesoEmQuilos * 1000) / consumo;
const sobra = (pesoEmQuilos * 1000) % consumo;

console.log(`O pacote durará ${duracao} dia(s).`);
console.log(`Sobrará no pacote ${sobra} gramas.`);
