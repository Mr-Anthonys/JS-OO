const animais = require('./animais.json');

const animaisString = JSON.stringify(animais);


animais.animais.push(
    {
        "id": 4,
        "nome": "Claudio",
        "tipo": "Mamifero",
        "habitat": "Floresta Tropical"
    }
);

animais.animais[1].habitat = "Herbivoro";

function removeAnimal(id) {
    animais.animais = animais.animais.filter(animal => animal.id !== id);
};

removeAnimal(3);

const animaisString2 = JSON.stringify(animais)

console.log(animaisString2)



const pessoaOriginal = require('./pessoa.json');

function getCopiaObj(obj) {
    const copiaProfunda = JSON.parse(JSON.stringify(obj));

    copiaProfunda.id = 2;
    copiaProfunda.nome = 'Rogerio';
    copiaProfunda.idade = 34;

    return copiaProfunda;
}

console.log(pessoaOriginal);
console.log(getCopiaObj(pessoaOriginal));

