function getPreco(imposto = 0, moeda = 'R$') {
    return (`${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} - ${this.nome}`)
}

const produto = {
    nome: 'Notebook',
    preco: 2900,
    desc: 0.15,
    //getPreco
}


//global.preco = 20 //Chamando de forma global
//global.desc = 0.1 //Chamando de forma global

const carrinho = {preco: 49990, desc: 0.20, nome: 'Xbox'}
console.log(`${produto.preco} || so o preco`)

// console.log(getPreco())  //Nao vai chamar por conta do this dentro da funcao chumbando o nome, preco e desc
console.log(getPreco.call(produto))
console.log(getPreco.apply(carrinho))


console.log(getPreco.call(carrinho, 0.17, 'Dolar $'))
console.log(getPreco.apply(produto, [0.20, 'Dolar $'])) //Com apply tem que ter [] para chamar o parametro