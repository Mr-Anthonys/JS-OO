const estudante = require('./estudante.json');
const minhaFuncao = require('./importa-json2');
const lutador = require('./lutador.json');


const chaves = Object.keys(estudante);
const valores = Object.values(estudante);
console.log(valores);
//console.log(estudante);

console.log(minhaFuncao(2));


console.log('Aqui está a altura: ' + lutador.altura);

//CONVERTENDO JSON IMPORTADO (OBJETO) PARA STRING
const stringEstudante = JSON.stringify(estudante);
//console.log(stringEstudante);

const objEstudante = JSON.parse(stringEstudante);
console.log(typeof objEstudante);
console.log(objEstudante);
console.log(objEstudante.nome);




