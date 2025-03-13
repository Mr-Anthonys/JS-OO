const estudantes = require('./estudantes.json');

function ordenaDescrescente(lista, propriedade, decrescente = false) {
    return lista.sort((a, b) => {    
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof valorA === 'string') {
            valorA = valorA.toUpperCase();
        };

        if (typeof valorB === 'string') {
            valorB = valorB.toUpperCase();
        };

        //Verifica posicao
        if (valorA < valorB) {
            return decrescente ? 1 : -1
        }
        if (valorA > valorB) {
            return decrescente ? -1 : 1
        }
        return 0;
    });
};

const ordemDecrescente = ordenaDescrescente(estudantes, 'nome', false);
console.log(ordemDecrescente);
