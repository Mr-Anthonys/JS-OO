const estanteFilmes = require('./estanteFilmes.json');

function filtrarFilmesPorAno(valor) {
    return estanteFilmes.filter((filme) => {
        if (filme.anoLancamento == valor) {
            return filme.anoLancamento;
        };
        return 0;
    })
}

console.log(filtrarFilmesPorAno(1993));


/*
O que está errado no seu código?
O nome da variável dentro do .filter() está confuso

Você chamou de (ano), mas cada item da estanteFilmes representa um filme inteiro (um objeto com várias propriedades, como titulo, diretor, anoLancamento).
O nome mais adequado para essa variável seria filme.
A forma de acessar a propriedade está errada

Em ano[valor], você está tentando acessar uma chave dinâmica, mas o valor passado é um número (exemplo: 1999).
O JSON não tem uma chave "1999", mas sim uma propriedade fixa chamada "anoLancamento".
A comparação precisa ser direta

Você precisa comparar filme.anoLancamento com o valor passado.
Exemplo: Se valor = 1999, então precisa verificar se filme.anoLancamento === 1999.
O .filter() já retorna os itens correspondentes

Não precisa fazer return 'Não foi possível encontrar.' dentro do .filter(), pois ele já cuida de filtrar os resultados.
Se nenhum filme for encontrado, basta verificar se o array retornado está vazio.
*/