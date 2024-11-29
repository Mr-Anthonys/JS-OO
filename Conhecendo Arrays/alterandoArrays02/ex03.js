/*
Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
*/

const notas = [1, 3, 6, 12];
let soma = 0;

for (let nota of notas) {
    soma += nota
}

const media = soma / notas.length
console.log(media)



/*
Crie uma função que receba uma array e imprima no console o número do índice e o elemento
*/
const meuArray = ['Anthony', 'Andreas']
function getIndice(filaSuporte) {
    const posicaoFila = filaSuporte[0].indexOf('Andreas');
    console.log(posicaoFila)
}

getIndice(meuArray)