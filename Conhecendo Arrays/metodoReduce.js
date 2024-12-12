const salaJS = [5, 6, 8, 10, 9];
const salaJava = [5, 6, 8, 10, 9];
const salaPhyton = [5, 6, 8, 10, 9];

function getMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / listaDeNotas.length;
    return media;
}