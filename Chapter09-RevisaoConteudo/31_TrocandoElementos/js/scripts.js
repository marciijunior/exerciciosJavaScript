// criar elemento 
var el = document.createElement('h3');

el.classList = 'texto-classe';

var texto = document.createTextNode('Substituindo elementos');

el.appendChild(texto);

console.log(el);

// selecionar elemento a ser substituído
var title = document.querySelector('#title');

console.log(title);

// selecionar o pai do elemento a ser substituído

var pai = title.parentNode;

// substituir

pai.replaceChild(el, title);