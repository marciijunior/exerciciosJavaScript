const frm = document.querySelector("form");
const respostaUm = document.querySelector("h3");
const respostaDois = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nota1 = Number(frm.inPrimeiraNota.value);
  const nota2 = Number(frm.inSegundaNota.value);
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    respostaUm.textContent = `Média: ${media.toFixed(1)}`;
    respostaDois.textContent = "Situação: Aprovado";
    respostaDois.style.color = "green";
  } else if (media >= 4) {
    respostaUm.textContent = `Média: ${media.toFixed(1)}`;
    respostaDois.textContent = "Situação: Recuperação";
    respostaDois.style.color = "yellow";
  } else {
    respostaUm.textContent = `Média: ${media.toFixed(1)}`;
    respostaDois.textContent = "Situação: Reprovado";
    respostaDois.style.color = "red";
  }
});
