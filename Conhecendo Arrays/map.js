const notas = [1, 1, 1, 1, 1];
let soma = 0
notas.map(function (nota) {
    return soma += nota
})

console.log(soma);


const notasAtualizadas = notas.map((nota) => nota + 1);
console.log(notasAtualizadas)