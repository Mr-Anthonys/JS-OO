/*
1 - Crie uma função que receba dois arrays e os concatene em um único array.
*/

const array1 = ['ola', 'dois'];
const array2 = ['oi', 'tres'];

function concatArray(valor1, valor2) {
    const concatArray = valor1.concat(valor2);
    return concatArray;
}

console.log(concatArray(array1, array2));


/*
2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ateCinco = numeros.slice(0, numeros.length / 2);
const deCincoAteDez = numeros.slice(numeros.length / 2);

console.log(`Ate Cinco: ${ateCinco}
Ate Dez: ${deCincoAteDez}`)



/*
Dado o array frutas contendo frutas que desejamos comprar na feira:

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
*/

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 3, "Kiwi", "Pêssego");

console.log(frutas)


/*
4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
*/

const menuPrincipal = ['File', 'Ovo Frito', 'Omelete'];
const menuDeSobremesas = ['Chocolate', 'Beijinho', 'Cocada'];

const menuCompleto = menuPrincipal.concat((menuDeSobremesas));
console.log(menuCompleto);


/*
5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

Dicas:

comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for.
*/

const matriz = [
    
]
let matrizT = matriz.length
for (let i = matrizT; i <= 3; i++) {
    matriz.push([i]);
    for (let c = matriz.length; c <= 3; c++) {
        matriz.push([i][c]);
    }
}

console.log(matriz)

/*
Resolucao do Professor:
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valorInicial++);
    }
    matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
*/



/* 
6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
*/

const matriz2 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]

console.log(matriz2[1][2]);


/*
7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
*/

const matriz3 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]
matriz3[2][1] = 15;
console.log(matriz3)