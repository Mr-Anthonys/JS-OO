const fs = require('fs');

const caminhoArquivo = process.argv
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, texto) => {
    
    //contadorDePalavras(texto.toUpperCase());
    console.log(texto);
    
})
