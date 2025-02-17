const estudante = require('./estudante.json');
const minhaFuncao = require('./importa-json2');
const lutador = require('./lutador.json');


const chaves = Object.keys(estudante);
const valores = Object.values(estudante);
console.log(valores);
//console.log(estudante);

console.log(minhaFuncao(2));


console.log('Aqui está a altura: ' + lutador.altura);
