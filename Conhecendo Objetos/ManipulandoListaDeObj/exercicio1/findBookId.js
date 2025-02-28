const biblioteca = require('./biblioteca.json');

function encontrarLivroPorID(lista, propriedade, id) {
    return lista.find((livro) => {
            if (livro[propriedade] === id) {
                livro[propriedade]
            } else {
                return "Livro nao encontrado.";
            }
    });
};

const livroEncontrado = encontrarLivroPorID(biblioteca, 'id', 4);
console.log(livroEncontrado);



//Opinião do instrutor
function encontrarLivroPorID2(id) {
    return biblioteca.find(livro => livro.id === id) || null;
}

// Encontra um livro com ID existente
const livroEncontrado1 = encontrarLivroPorID2(2);
console.log("Livro Encontrado (ID 2):");
console.log(livroEncontrado1);

// Encontra um livro com ID inexistente
const livroEncontrado2 = encontrarLivroPorID2(4);
console.log("\nLivro nao encontrado (ID 4):");
console.log(livroEncontrado2)