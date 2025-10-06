// selecionar elemento
const title = document.querySelector("#title");

// Para atualizar um texto, temos duas formas: innerHTML ou textContent.
// Porém sempre utilizaremos o textContent, pois possui uma melhor performance.

// innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent

const subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";

// # <- Para elementos
// . <- Para classes
