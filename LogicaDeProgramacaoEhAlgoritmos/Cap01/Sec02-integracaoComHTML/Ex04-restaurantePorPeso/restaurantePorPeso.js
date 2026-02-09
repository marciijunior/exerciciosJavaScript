const frm = document.querySelector("form");
const respostaUm = document.querySelector("#respostaUm");

frm.addEventListener("submit", (e) => {
  const precoKg = Number(frm.querySelector("#idPrecoKg").value);
  const quantidade = Number(frm.querySelector("#idQtdConsumo").value);
  
  const consumoFinal = precoKg * quantidade;

  respostaUm.innerText = `Valor a ser pago: R$ ${consumoFinal.toFixed(2)}`;
  e.preventDefault();
});
