const salaJS = [5, 6, 8, 10, 9];
const salaJava = [5, 6, 8, 7, 9];
const salaPhyton = [5, 6, 3, 6, 9];

function calcularMedia(listaDeNotas) {
    //REDUCE
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    //REDUCE REDUZIDO
    //const somaReduzida = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / listaDeNotas.length;
    return media;
};

console.log(calcularMedia(salaJS));
console.log(calcularMedia(salaPhyton));
console.log(calcularMedia(salaJava));