const notas = [10, 8.5, 7, 9, 10];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice + ' - ' + notas[indice]);
}

console.log(notas.join(' - '))


const notaAluno = [10, 6.5, 8, 7.5];
let qtd = 0

function getMedia(notaAluno) {
    for (let i = 0; i < notaAluno.length; i++) {
        // qtd = notaAluno[i] + qtd
        qtd += notaAluno[i];
    }
    const media = (qtd / notaAluno.length)

    return media;
};

console.log(`Media: ${getMedia(notaAluno)}`);



const matriz = [];

function getSoma(matriz) {
    for (let i = 0; i < 3; i++) {
        matriz = [i]
        for (let j = 0; j < 3; j++) {
            matriz = [i][j]
        }
    }
}

console.log(getSoma(matriz));