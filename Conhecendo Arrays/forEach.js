const notas = [2, 5, 6.5, 10];
let somas = 0

notas.forEach(function (nota) {
    somas += nota;
})

console.log(somas)


//Ou usando funcao Callback

const arrayNotas = [2, 5, 6.5, 10];
let media = 0
let soma = 0

function getMedia(arrayNotass) {
    soma += arrayNotass
}