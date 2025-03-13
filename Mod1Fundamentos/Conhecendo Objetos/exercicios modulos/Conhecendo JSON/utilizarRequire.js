const dados = require('./dados.json');
const dadosString = JSON.stringify(dados)

console.log(dados);
console.log(dadosString);


function verificaQtd(obj) {
    const qtdArray = (Object.values(obj).filter(qtd => Array.isArray(qtd)).length) -1
    console.log(obj.produtos[qtdArray].nome);
    
}

verificaQtd(dados)


