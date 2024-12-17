const estudante = {
    nome: "Andreas",
    idade: 21,
    cpf: '54898948495',
    turma: 'JS'
};

//FUNCTION que exibe uma propriedade do objeto
function acessaObj(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
};

console.log(acessaObj(estudante, 'nome'));

//OU

//Notacao Colchetes
console.log(estudante['cpf']);

