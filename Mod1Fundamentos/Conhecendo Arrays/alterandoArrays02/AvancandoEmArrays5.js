/*
1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
*/
const salaJS = [0, 1];
const salaPy = [2, 3];
const salaJava = [4, 5];

function juntarArray(...array) {
    return [].concat(...array);
}

console.log(juntarArray(salaJS, salaPy, salaJava));



/*
2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
*/
const numeros = [5, 1, 1, 1, 5];

const somaNumeros = numeros.reduce((contador, numero) => {
    return contador + numero;
}, 0);

console.log(`Contador com REDUCE: ${somaNumeros}`)


/*
3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const novaListaCores = [...new Set(coresLista1.concat(coresLista2))];
console.log(novaListaCores)



/*
4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
*/
const numerosGeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PairN = numerosGeral.filter((numero) => {
    return (numero % 2 == 0) ? true : false;
})
console.log(PairN);

const NotIsPair = numerosGeral.filter((numero) => {
    return (numero % 2 != 0) ? true : false;
})
console.log(NotIsPair)




/*
5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
*/
const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filtrado = numerosArray.filter((mult) => {
    return (mult % 3 == 0 && mult > 5) ? true : false;
});

console.log(`Multiplo de 3 e Maior que 5: ${filtrado}`)


/*
6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/

const somaNumerosFor = [1, 1, 1, 1, 1];
let soma = 0;

somaNumerosFor.forEach((numero) => {
    soma += numero;
});

console.log(soma);