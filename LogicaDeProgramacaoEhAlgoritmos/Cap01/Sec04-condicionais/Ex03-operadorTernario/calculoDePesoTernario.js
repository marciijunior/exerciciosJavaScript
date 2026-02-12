const frm = document.querySelector("form");
const respostaUm = document.querySelector("h3");
const respostaDois = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inNome.value;
  const masculino = frm.inMasculino.checked;
  const altura = Number(frm.inAltura.value);

  const pesoIdeal = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);
  
  respostaUm.innerText = `Olá ${nome}`;
  respostaDois.innerText = `Seu peso ideal é ${pesoIdeal.toFixed(2)}`;
});
