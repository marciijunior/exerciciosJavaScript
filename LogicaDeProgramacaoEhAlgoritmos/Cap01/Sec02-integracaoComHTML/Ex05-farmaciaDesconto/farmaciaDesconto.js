const frm = document.querySelector("form");
const respostaUm = document.querySelector("#respostaUm");
const respostaDois = document.querySelector("#respostaDois");

frm.addEventListener("submit", (e) => {
  const medicamentoVendido = frm.querySelector("#idMedicamento").value;
  const precoMedicamentos = Number(frm.querySelector("#idPreco").value);
  const precoSemCentavos = Math.floor(precoMedicamentos * 2);

  respostaUm.innerText = `Promoção de ${medicamentoVendido}`;
  respostaDois.innerText = `Leve 2 por apenas R$ ${precoSemCentavos},00`;
  e.preventDefault();
});
