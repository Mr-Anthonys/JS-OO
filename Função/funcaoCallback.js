const notas = [1.1, 5.2, 7.4, 8.9, 6.7, 3.2, 10]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(`Notas baixas sem Callback: ${notasBaixas}`)

//COM CALLBACK 1
const notasBaixas1 = notas.filter(function (nota) {
    return nota < 7;
})
console.log(`Notas Baixas UM: ${notasBaixas1}`);

//COM CALLBACK 2
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(`Notas baixas DOIS: ${notasBaixas2}`)

//COM CALLBACK 3
const notasMaiorQue7 = nota => nota < 7;
const notasBaixas3 = notas.filter(notasMaiorQue7)
console.log(`Notas Baixas TRÊS: ${notasBaixas3}`)


//COM CALLBACK 4
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))