const valor = 'fora do escopo';

function lexico() {
    console.log(valor);
}


function segundoLexico() {
    const valor = 'Dentro do escopo';
    lexico()
}

segundoLexico();  //'Fora do escopo', pois no contexto da funcao lexico, a const VALOR teria sido declarada como 'fora do escopo'