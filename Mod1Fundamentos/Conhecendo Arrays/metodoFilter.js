//Metodo FILTER ele devolve um array igual map, porem, somente que deram true passando pela funcao.
//EX.:
const meuArray = [1, 2, 3, 4];

const isPair =  function(x) {
    return (x % 2 == 0) ? true : false;
}

const arrayPair = meuArray.filter(isPair); //So ira para a variavel arrayPair se for true em isPair
console.log(arrayPair)   //[2, 4]



//OUTRO EXEMPLO:
const alunos = ['Carlos' , 'Marcos', 'Gabriel'];
const medias = [5, 8, 6];

const result = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})
console.log(result)