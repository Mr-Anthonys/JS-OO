const estudantes = require('./estudantes.json');

function encontrarEstudante(lista, propriedade, valor) {
    return lista.find((estudante) => {
        return estudante[propriedade].includes(valor);
    })
};

const estudanteEncontrado = encontrarEstudante(estudantes, 'nome', 'Olva');
console.log(estudanteEncontrado);
