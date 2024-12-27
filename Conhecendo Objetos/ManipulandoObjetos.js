const cliente = {
    nome: "Jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
};

cliente.animalEstimacao = [{
    nome: "Kripto",
    raca: "Cão",
    vacinado: true
}];

cliente.animalEstimacao.push({
    nome: "Lex",
    raca: "Gato",
    vacinado: false
})


const nomeCachorro = cliente.animalEstimacao.filter((animal) => {
    return animal.raca == "Cão" ? console.log(animal.nome) : console.log('Não é dog.')
});


const array = [1, 1, 1, 1]
const soma = array.reduce((contador, nmr) => {
    return nmr + contador;
}, 0)
console.log(soma)
