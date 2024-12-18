/*
1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
*/
const livro = {
    titulo: 'Nada Pode Me Ferir',
    autor: 'David Goggins',
    anoPublicacao: 2021,
    genero: 'Desenvolvimento Pessoal',
};







/*
2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/
const anoAtual = new Date().getFullYear();
livro.idadePublicacao = (`${anoAtual - livro.anoPublicacao} anos`);
console.log(`Meu livro favorito é ${livro.titulo} do autor ${livro.autor}. Foi publicado do ano de ${livro.anoPublicacao} e ele é sobre ${livro.genero}. Idade de publicação: ${livro.idadePublicacao}`)





/*
3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
*/
const livro1 = {
    titulo: 'Nunca é Hora de Parar',
    autor: 'David Goggins',
    anoPublicacao: 2023,
    genero: 'Desenvolvimento Pessoal'
};
const anoAtual2 = new Date().getFullYear();
livro1['IdadePublicacao'] = (`${anoAtual2 - livro1['anoPublicacao']} ano(s)`);
console.log(livro1['IdadePublicacao']);



/*
4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

No final do arquivo livro.js, adicione uma avaliação ao objeto.

Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
*/

livro.avaliacao = '';
const notaLivro = 10;

// function getAvalicao(obj) {
//     for (let i in obj) {
//         if (i == 'avaliacao') {
//             if (obj.avaliacao == null) {
//                 obj.avaliacao = notaLivro;
//             } else {
//                 console.log(`Já existe avaliação: ${obj.avaliacao}`)
//             }
//         } else {
//             obj.avaliacao = notaLivro;
//             console.log(`Avaliação adicionada em 2° instância: ${obj.avaliacao}`)
//         }
//     }
// }

function getAvalicao(obj) {
    if (obj.hasOwnProperty('avaliacao')) {
        console.log("Existe")
    } else {
        console.log("Não existe");
        
    }
}

getAvalicao(livro);
console.log(livro)

/*
5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
*/

livro1.genero = 'Aventura';
console.log(livro1.genero)




/*
6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
*/