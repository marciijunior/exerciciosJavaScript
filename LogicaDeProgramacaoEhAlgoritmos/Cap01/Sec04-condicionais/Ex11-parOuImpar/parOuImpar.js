const frm = document.querySelector("form");
const respostaUm = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    if (numero % 2 === 0) {
        respostaUm.innerText = "Esse número é Par.";
    } else {
        respostaUm.innerText = "Esse número é Ímpar.";
    }
});