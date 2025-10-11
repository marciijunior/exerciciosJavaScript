function renderizarTextoManualmente(texto) {
    let htmlResultante = "";
    
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        // Negrito (**)
        if (char === '*' && texto[i + 1] === '*') {
            let fimDoNegrito = -1;
            for (let j = i + 2; j < texto.length; j++) {
                if (texto[j] === '*' && texto[j + 1] === '*') {
                    fimDoNegrito = j;
                    break;
                }
            }
            
            if (fimDoNegrito !== -1) {
                const textoEmNegrito = texto.substring(i + 2, fimDoNegrito);
                htmlResultante += `<strong>${textoEmNegrito}</strong>`;
                i = fimDoNegrito + 1;
                continue;
            }
        }

        // Sublinhado (__)
        if (char === '_' && texto[i + 1] === '_') {
            let fimDoSublinhado = -1;
            for (let j = i + 2; j < texto.length; j++) {
                if (texto[j] === '_' && texto[j + 1] === '_') {
                    fimDoSublinhado = j;
                    break;
                }
            }

            if (fimDoSublinhado !== -1) {
                const textoSublinhado = texto.substring(i + 2, fimDoSublinhado);
                htmlResultante += `<u>${textoSublinhado}</u>`;
                i = fimDoSublinhado + 1;
                continue;
            }
        }
        htmlResultante += char;
    }
    return htmlResultante;
}

const editor = document.getElementById('editor');
const preview = document.getElementById('caixaTexto');

editor.addEventListener('input', () => {
    const textoBruto = editor.value;
    const textoConvertido = renderizarTextoManualmente(textoBruto);
    preview.innerHTML = textoConvertido;
});

preview.innerHTML = renderizarTextoManualmente(editor.value);