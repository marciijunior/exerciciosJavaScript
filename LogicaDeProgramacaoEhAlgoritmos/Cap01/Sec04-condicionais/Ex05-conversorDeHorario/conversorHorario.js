const frm = document.querySelector("form")
const resposta1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const horarioBrasil = Number(frm.inBrasil.value);
  
  let horarioFranca = horarioBrasil + 5;
  if (horarioFranca > 24){
    horarioFranca = horarioFranca - 24;
  }
  resposta1.innerText = (`O horário brasileiro é de ${horarioBrasil}, já na França devido ao fuso, é ${horarioFranca}`)
  });