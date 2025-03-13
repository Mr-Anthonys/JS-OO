const biblioteca = require('./bibliotecaa.json');

const novoLivro = {
    "titulo": "Node.js: Guia Prático",
    "autor": "Alice Coder",
    "genero": "Tecnologia",
    "ano_publicacao": 2022
};

biblioteca.push(novoLivro);
const stringBiblioteca = JSON.stringify(biblioteca);
console.log(stringBiblioteca);
console.log(typeof stringBiblioteca);

module.exports = stringBiblioteca;



