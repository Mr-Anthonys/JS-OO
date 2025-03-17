const fs = require('fs');

//require so funciona com modulos, arquivos js
const caminhoArquivo = process.argv; 
const link = caminhoArquivo[2];


fs.readFile(link, 'utf-8', (erro, texto) => {
    //contadorDePalavras(texto);
    quebrandoTexto(texto);
});

function quebrandoTexto(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return contadorDePalavras(paragrafo);
    })
    
}

function contadorDePalavras(texto) {
    const listaPalavras = texto.toLowerCase().split(' ').filter(palavras => palavras);
    const resultado = {};

    //objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });
    return console.log(resultado)
}
