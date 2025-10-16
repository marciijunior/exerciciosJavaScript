const frm = document.querySelector("form");
// Preciso criar uma variável constante chamada frm. Para encontrar o seu valor, olhe para o documento HTML (document), use a ferramenta de busca (.querySelector), e me traga o primeiro elemento <form> que você encontrar. A partir de agora, frm é o apelido para esse formulário.

const resp = document.querySelector("h3");
// Crie outra variável constante chamada resp. Use a ferramenta de busca (.querySelector) no documento e me traga o primeiro elemento <h3> que encontrar. resp agora é o apelido para esse cabeçalho vazio.

frm.addEventListener("submit", (e) => {
  // Pegue o formulário (frm) e adicione um 'ouvinte de eventos' (.addEventListener) a ele. Fique a 'ouvir' por um evento do tipo 'submit' (que acontece quando o botão de envio é clicado). Quando esse evento acontecer, execute a função que vou te passar a seguir. Dê ao evento em si o apelido de "e" para que possamos usá-lo dentro da função.

  const nome = frm.inNome.value;
  // Vá para a variável frm (que é o formulário), encontre o elemento .inNome (que é o campo de input com esse id), e me dê o .value (o texto que o utilizador digitou nele).
  // Tambem seria possível utilizarmos da seguinte sintaxe: const nome = document.querySelector("form").inNome.value;

  resp.innerText = `Olá ${nome}`;
  // Vá para o cabeçalho h3 (que apelidamos de resp). Altere a propriedade de texto interno dele (.innerText). O novo texto será a string 'Olá ' seguida pelo valor que acabámos de guardar na variável nome.
  
  e.preventDefault();
  // A linha mais importante: impede o comportamento padrão do navegador de recarregar a página.
});
