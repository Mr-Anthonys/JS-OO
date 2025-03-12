/*
O método .flatMap() é uma combinação de .map() e .flat().

Ele primeiro mapeia os elementos do array para um novo formato e depois "achata" o resultado, removendo um nível de arrays aninhados.
*/

const profissionais = require('./listaTeste.json');

//console.log(profissionais);


const todasProfissoes = profissionais.flatMap((prof) => {
    return prof.profissoes
})

function FindProfessional(lista, propriedade, id) {
    return lista.find((profissional) => {
        if (profissional[propriedade] === id) {
            return profissional[propriedade]
        }
    })
}

//console.log(FindProfessional(profissionais, 'nome', 'Andreas'))

// const todasProfissoesMap = profissionais.map((prof) => {
//     return prof.profissoes
// })

//console.log(todasProfissoes);



// const arrayDuplo = [1, 2, 3, [4, 5]];

// const arrayAchatado = arrayDuplo.flat()
// console.log(arrayAchatado);



//Usando Filter e FlatMap()
function FiltrarProfissão(lista, propriedade, valor) {
    return lista.filter((prof) => {
        for (i of prof[propriedade]) {
            if (i.nome === valor) {
                return true;
            }
        }


        
        
    })
}

console.log(FiltrarProfissão(profissionais, 'profissoes', 'Desenvolvedor'));
