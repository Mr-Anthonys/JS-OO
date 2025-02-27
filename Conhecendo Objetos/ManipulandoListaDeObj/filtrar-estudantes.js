const estudantes = require('./estudantes.json'); 

function procurarPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
};

const propriedadeEncontrada = procurarPorPropriedade(estudantes, 'cep');
console.log(propriedadeEncontrada);
