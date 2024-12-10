/*
Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.
*/

const arrayNums = [1, 2, 3, 4];
let nums = 0;

const resultMult = arrayNums.map((mult) => mult *= 10);

console.log(resultMult);


/*
1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
*/

const ex1 = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4'];
let elementoo = ""
ex1.forEach(function (elemento, indice) {
    console.log(`${indice} - ${elemento}.`);  //Nao entendi muito bem, depois pesquisar
})




/*
2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
*/
function executaOperacaoEmArray(meuArray, funCall) {
    return meuArray.map(funCall);
}

function calculo(num) {
    return num + 1;
}

const umArray = [1, 1, 1, 1];
const lista = executaOperacaoEmArray(umArray, calculo);
console.log(lista)



/*
3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
*/


const arrayNum = [1, 2, 3, 4];

function getArray(array, num) {
    array.toString()
    if (array.include(num)) {
        indice = array.indexOf();
        item = array[indice];
        console.log(`${indice} - ${item}`);
    } else {
        console.log(`-1`)
    }
}

getArray(arrayNum, 6)