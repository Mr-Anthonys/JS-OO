const Pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //this amarra o atributo saudacao ao objeto Pessoa
    }
}

Pessoa.falar()


function Pessoas() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoas


const self = this

function carros() {
    self.velocidade = 0
    self.velocidade++
    // console.log(self.velocidade)
}

console.log(setInterval(carros, 1000))
