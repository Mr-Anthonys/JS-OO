//Factory simples
//Factory e uma funcao que pode retornar um Objeto

function criarProduto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    return {
        nome: this.nome,
        preco: this.preco,
        desconto: 0.4
    }
}

console.log(criarProduto('Vassoura', 3.99))


//OU


function produtoJaCriado(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.5
    }
}

console.log(produtoJaCriado('Notebook', 2999,99))