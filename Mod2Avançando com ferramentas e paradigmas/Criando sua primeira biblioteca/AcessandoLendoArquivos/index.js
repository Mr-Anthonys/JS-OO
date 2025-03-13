const fs = require('fs');

//require so funciona com modulos, arquivos js
const caminhoArquivo = process.argv; 
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto);
})

