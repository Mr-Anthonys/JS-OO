class criarPessoa {
    constructor(nome, idade, peso) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
    }

    sair() {
        let talking = console.log(`My name is ${this.nome}, tenho ${this.idade} anos, e peso ${this.peso}.`)
        return talking
    }   
}

const p1 = new criarPessoa('Anthony', 21, 1.60)
p1.sair()




//Funcao Construtora

function Pessoa(nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p2 = new Pessoa('Andreas');
p2.falar()
