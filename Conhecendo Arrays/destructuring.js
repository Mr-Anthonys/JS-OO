//Exemplo de destructuring em Array e Objetos;

const pessoa = {
    nome: 'Anthony',
    idade: 21
};

const {nome} = pessoa;
console.log(nome)

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



//Arrays
const pessoa1 = ['Uva', 'maça'];

const [Fruta1, Fruta2] = pessoa1
console.log([Fruta1, Fruta2])
const Uva = [Fruta1]
const maca = [Fruta2];

console.log(Uva);
console.log(maca);

