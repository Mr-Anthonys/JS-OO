//Exemplo de destructuring em Array e Objetos;

const pessoa = {
    nome: 'Anthony',
    idade: 21
};

const loja = {
    nome: 'Perfum',
    data: new Date()
}

function destructuringObject({data}) {
    let date = data.toLocaleDateString('pt-BR');
    return date;
}

console.log(destructuringObject(loja))


let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);