//CLASSE
//Da pau nop console por causa do This
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome e: ${this.nome}`)
    }
}


const p1 = new Pessoa('Joao')
p1.falar()


//FACTORY
//No console ele sempre vai apontar pra variavel certa pq nao tem This

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = new criarPessoa('Joao');
p2.falar()