function carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const BMW = new carro
BMW.acelerar()
console.log(BMW.getVelocidadeAtual())

const Ferrari = new carro(350, 20)
Ferrari.acelerar() //20
Ferrari.acelerar() //40
console.log(Ferrari.getVelocidadeAtual())


console.log(typeof carro)
console.log(typeof Ferrari)
