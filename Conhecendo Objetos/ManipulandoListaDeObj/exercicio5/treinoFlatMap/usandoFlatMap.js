const profissionais = require('./listaTeste.json');

const todasProfissoes = profissionais.flatMap((prof) => {
    return prof.profissoes
})

console.log(todasProfissoes);

/*
O método .flatMap() é uma combinação de .map() e .flat().

Ele primeiro mapeia os elementos do array para um novo formato e depois "achata" o resultado, removendo um nível de arrays aninhados.
*/