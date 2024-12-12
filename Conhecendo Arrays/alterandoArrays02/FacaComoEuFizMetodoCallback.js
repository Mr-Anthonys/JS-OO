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
    if (array.includes(num)) {
        indice = array.indexOf(num);
        item = array[indice];
        console.log(`indice: ${indice} - valor: ${item}`);
    } else {
        console.log(`-1`)
    }
}

getArray(arrayNum, 4)




/*
4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
*/

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

function findName(nome) {
    const nomeEncontrado = todasAsTurmas.find(nomeProcura => nomeProcura === nome);
    if (nomeEncontrado) {
        console.log(nomeEncontrado);
    } else {
        console.log('Aluno nao encontrado.');
    }
};
findName('Carlos Oliveira');




/*
5 - Considere um array de números inteiros.

Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
*/
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(numero => {
    let resultado = numero *3;
    console.log(resultado);
});

const indicee18 = numeros.findIndex(numero => numero === 18);
if (indicee18) {
    console.log(`Indice número 18: ${indicee18}`);
} else {
    console.log(`Numero não encontrado`);
}
