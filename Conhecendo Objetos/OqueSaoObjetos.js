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



const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});


//////
const pessoa1 = {
    nome: 'Andreas',
    idade: 15,
    jogo: 'r6',
    telefone: ['551199393939393', '5511929292929'],
}


pessoa1.endereco = {
    rua: 'Manuel Martins Ferreira',
    apto: 92,
    cep: '022040'
}

console.log(pessoa1.endereco.cep);

