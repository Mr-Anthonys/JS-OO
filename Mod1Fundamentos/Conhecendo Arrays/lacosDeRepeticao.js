const alunos = ['Lara', 'Leticia', 'Mateus', 'Anthony'];
const media = [5, 10, 6, 10];

const lista = [alunos, media]

function getNameMedia(aluno) {
    if (lista[0].includes(aluno)) {
    //Destructuring
        const [alunos, media] = lista
    //Usando
        const posicaoAluno = alunos.indexOf(aluno);
        const mediaAluno = media[posicaoAluno];
        console.log(`Aluno: ${aluno} e sua nota ${mediaAluno}`)
    //Nao usando Destructuring
        //const posicaoAluno = lista[0].indexOf(aluno);
        //console.log(`Aqui esta o Aluno: ${lista[0][posicaoAluno]}. & sua nota: ${lista[1][posicaoAluno]}.`)
    } else {
        console.log('O aluno nao foi encontrado.');
    }
}

getNameMedia('Mateus');