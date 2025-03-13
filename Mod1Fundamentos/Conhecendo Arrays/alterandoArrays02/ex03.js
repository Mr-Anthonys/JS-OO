/*
1) Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
*/

const notas = [1, 3, 6, 12];
let soma = 0;

for (let nota of notas) {
    soma += nota
}

const media = soma / notas.length
console.log(media)



/*
2) Crie uma função que receba uma array e imprima no console o número do índice e o elemento
*/
const meuArray = ['Anthony', 'Andreas']
function getIndice(filaSuporte) {
    const posicaoFila = filaSuporte[0].indexOf('Andreas');
    console.log(posicaoFila)
}

getIndice(meuArray)


/*
3) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
*/

const arraySoma = [1, 1, 1, 1, 1];
let somas = 0
let nmrSoma = []

function getSomaArray(valor) {
    for (let soma of valor) {
        nmrSoma = [valor[soma]];
        somas += soma;
    }
    let result = console.log(`${nmrSoma} - ${somas}`)
    return result;
}

getSomaArray(arraySoma);


/*
4) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
*/

//FORMA 1
const arrayzinho = [1, 2, ,3 ,4 ,5 ,6 ,7];
function getMenorMaior(arrayzinho) {
    x = arrayzinho[0];
    indice = arrayzinho.length;
    y = arrayzinho[indice -1];

    return [`Menor ${x}, Maior ${y}`];
}

console.log(getMenorMaior(arrayzinho))



//FORMA 2
const arrayzinho2 = [2, 3, 7, 2, 8, 10, 5, 20, 15, 30, 10, 4, 2, 1, 0, 15, 40, 27, 31, -1, 5, 30];

function randomMenorMaior(arrayzinho2) {
    x = arrayzinho2[0];
    y = arrayzinho2[0];
    for (let i = 0; i < arrayzinho2.length; i++) {

        if (arrayzinho2[i] < x) {
            x = arrayzinho2[i];
        } 
        if (arrayzinho2[i] > y) {
            y = arrayzinho2[i];
        }
    }

    return console.log(`Menor ${x} - Maior ${y}`);
}

randomMenorMaior(arrayzinho2);



/*
5) Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function nmrPares(numeros) {
    const pares = [];
    const impar = [];

    for (let n = 0; n < numeros.length; n++) {
        if (numeros[n] % 2 == 0) {
            pares.push(numeros[n]);
        } else {
            impar.push(numeros[n]);
        }
    }
    let paresString = pares.join(" - ")
    let imparesString = impar.join(" - ")

    console.log(`Pares: ${paresString} | Impar ${imparesString}`)
}

nmrPares(numeros);



/*
6) Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
*/
const mediaNumeros = [2, 2, 2, 2];

function mediaArray(mediaArray) {
    let somaMedia = 0

    for (soma of mediaArray) {
        somaMedia += soma;
    }
    const result = somaMedia / mediaArray.length;

    console.log(`Média de notas: ${result}`);
}

mediaArray(mediaNumeros);