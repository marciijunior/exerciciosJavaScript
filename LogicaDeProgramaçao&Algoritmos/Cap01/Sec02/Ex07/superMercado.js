const frm = document.querySelector("form");
const resultadoUm = document.querySelector("#resultadoUm");

frm.addEventListener("submit", (e) => {
  const preco = Number(frm.inPreco.value);
  const quantidade = Number(frm.inQuantidade.value);
  const valorTotal = preco * quantidade;
  let desconto = 0;

  if (quantidade >= 3) {
    desconto = valorTotal * 0.5;
  }

  let total = valorTotal - desconto;
  
  resultadoUm.innerText = `Total a pagar: R$ ${total.toFixed(2)}`;
  e.preventDefault();
});
