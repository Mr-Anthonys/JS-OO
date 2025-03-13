function cardapioLanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100:
            descricao = `Cachorro Quente = R$${3 * quantidade}`
            break;
        case 200:
            descricao = `Hamburguer Simples = R$${4 * quantidade}`
            break;
        case 350:
            descricao = `Cheeseburguer = R$${5.5 * quantidade}`
            break;
        case 400:
            descricao = `Bauru = R$${7.5 * quantidade}`
            break;
        case 500:
            descricao = `Refrigerante = R$${3.5 * quantidade}`
            break;
        case 600:
            descricao = `Suco = R$${2.8 * quantidade}`
            break;
        default:
            descricao = `Produto nao existente.`
    }
    return descricao;
}

console.log(cardapioLanchonete(400, 2))