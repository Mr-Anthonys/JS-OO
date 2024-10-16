// IIFE --> Immediately Invoked Function Expression
// Uma funcao que e executada assim que definida (Auto-invocavel e funcao anonima)
// As variaveis definidas dentro das IIFE nao podem ser acessadas fora do seu escopo

/*
        (function () {
            let nome = 'Andreas'
        })();
    //A variavel de fora nao pode acessar essa variavel de dentro dessa funcao auto-executavel e anonima
        nome;
        console.log(nome)
*/



let resultadoNome = (function () {
    let nome = 'Anthony';
    return nome;
})();

console.log(`Meu nome ${resultadoNome}`)




/* DEU RUIM ESSA AQUI

let funcaoFactoryComRetorno = (function (nome, idade) {

    return {
        nome,
        idade
    }
})();

*/
