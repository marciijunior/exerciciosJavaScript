const frm = document.querySelector("form");
const respostaUm = document.querySelector("#respostaUm");

frm.addEventListener("submit", (e) => {
    const valorMinutos = Number(frm.inValor.value);
    const tempoMinutos = Number(frm.inTempo.value);

    const valorTotalMinutos = Math.floor(tempoMinutos/15);
    const valorTotal = valorTotalMinutos * valorMinutos;

    respostaUm.innerText = `O valor cobrado por ${tempoMinutos} minutos é R$ ${valorTotal.toFixed(2)}`;
    e.preventDefault();
})