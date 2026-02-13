const prompt = require("prompt-sync")();
const pessoas = Number(prompt("Número de pessoas: "));
const peixes = Number(prompt("Número de peixes que deseja levar: "));

let valorIngresso = 20.0;
let valorPeixes;
let valorTotal;
const peixesExtras = peixes - pessoas;

if (peixes > pessoas) {
  valorPeixes = peixesExtras * 12;
  valorTotal = valorPeixes + valorIngresso * pessoas;
  console.log(
    `Ingressos: R$20 * ${pessoas}\nPeixes extras: R$12 * ${peixesExtras}`,
  );
  console.log(`O valor total ficou por: R$${valorTotal}`);
} else {
  valorTotal = valorIngresso * pessoas;
  console.log(`Ingressos: R$20 * ${pessoas}`);
  console.log(`O valor total ficou por: R$${valorTotal}`);
}
