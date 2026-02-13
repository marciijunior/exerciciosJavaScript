const prompt = require("prompt-sync")();
const valorTotal = Number(prompt("Digite o valor da compra: "));

const calculoParcelas = () => {
  let numeroDeParcelas = Number(
    prompt("Digite o número de parcelas pretendidas: "),
  );
  // Validação: parcelas entre 1 e 6, e cada parcela >= 20
  if (
    numeroDeParcelas < 1 ||
    numeroDeParcelas > 6 ||
    valorTotal / numeroDeParcelas < 20.0
  ) {
    console.log(
      "Número de parcelas inválido ou valor por parcela menor que R$20. Tente novamente.",
    );
    return;
  }
  if (numeroDeParcelas === 1) {
    console.log(`O valor à vista é de R$${valorTotal.toFixed(2)}`);
  } else {
    const valorFinal = valorTotal / numeroDeParcelas;
    console.log(
      `O valor pago em ${numeroDeParcelas} parcelas: R$${valorFinal.toFixed(2)} cada.`,
    );
  }
};

calculoParcelas();