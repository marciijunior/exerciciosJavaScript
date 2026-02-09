const prompt = require("prompt-sync")();

const nomeVeiculo = prompt("Digite o nome do veículo: ");
const valorDeCompra = Number(prompt("Digite o valor de compra do veículo: "));

const valorDeEntrada = valorDeCompra * 0.5;
const valorDasParcelas = (valorDeCompra - valorDeEntrada) / 12;

console.log(`O valor de entrada para o veículo ${nomeVeiculo} é: R$ ${valorDeEntrada.toFixed(2)}`);
console.log(`O valor de cada parcela para o veículo ${nomeVeiculo} é: R$ ${valorDasParcelas.toFixed(2)}`);
