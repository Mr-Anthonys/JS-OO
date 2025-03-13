const fs = require('fs');

//require so funciona com modulos, arquivos js
const caminhoArquivo = process.argv; 
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    contadorDePalavras(texto);
});

function contadorDePalavras(texto) {
    const listaPalavras = texto.toLowerCase().split(' ').filter(palavra => palavra);
    const resultado = {};

    //objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });

    console.log(resultado)
}
