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

