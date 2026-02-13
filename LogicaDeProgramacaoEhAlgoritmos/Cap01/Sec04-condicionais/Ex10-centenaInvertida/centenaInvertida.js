const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um número: "));

const inverterCentena = () => {
  if (numero < 100 || numero > 999) {
    console.log("Seu número deve ser uma centena!");
    return;
  } else {
    const centena = Math.floor(numero / 100);
    const dezena = Math.floor((numero % 100) / 10);
    const unidade = numero % 10;
    const invertido = `${unidade}${dezena}${centena}`;
    console.log(`Número invertido: ${invertido}`);
  }
};

inverterCentena();
