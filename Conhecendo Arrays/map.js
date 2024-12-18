const notas = [1, 1, 1, 1, 1];
let soma = 0
notas.map(function (nota) {
    return soma += nota
})

console.log(soma);


const notasAtualizadas = notas.map((nota) => nota + 1);
console.log(notasAtualizadas)

//PADRONIZANDO STRINGS
const nomes = ['Andreas', 'Bruno', 'MaTeus', 'LeticiA']

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

