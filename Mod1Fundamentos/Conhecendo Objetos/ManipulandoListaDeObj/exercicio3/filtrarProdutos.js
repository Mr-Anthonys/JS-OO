const produtos = require('./produtos.json');

function filtrarOrdenarProdutos(precoMax, propriedade, decrescente = false) {

    /*
        No filter, apenas compare o preço com o precoMax e retorne true ou false.
        Não precisa retornar produto.preco, basta verificar se produto.preco <= precoMax.

        Método filter() retorna um booleano.
    */

    let produtosFiltrados = produtos.filter((produto) => produto.preco <= precoMax);

    return produtosFiltrados.sort((a ,b) => {
        let valorA = a[propriedade]
        let valorB = b[propriedade];

        if (typeof valorA === 'string' && typeof valorB === 'string') {
            return decrescente ? valorB.localeCompare(valorA) : valorA.localeCompare(valorB);
        } else {

            /*
                Para números, usamos a diferença valorA - valorB para ordenação crescente ou valorB - valorA para decrescente.
            */
            return decrescente ? valorB - valorA : valorA - valorB;
        }
    });;
}

console.log(filtrarOrdenarProdutos(3000, 'preco', true))