const estudante = {
    nome: 'Andreas',
    idade: 21,
    bolsista: false,
    endereco: [{
        rua: 'rua aquino teixeira',
        nmr: '21',
        complememnto: 'apto 43'
    },
    {
    rua: 'Manoel',
    mnr: '71',
    complememnto: null
    }]
}

for (i in estudante) {
    const tipo = typeof estudante[i];

    if (tipo != 'object' && tipo != 'function') {
        const texto = `Chave ${i} com valor ${estudante[i]}`
        console.log(texto);
    }
}

const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
    value: 42,
    enumerable: false
});

for (let chave in meuObjeto) {
    console.log(chave) //Nada, pois não há propriedades enumeraveis
}