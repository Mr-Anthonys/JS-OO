/*
1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
*/
const Pessoa = {
    nome: "Robson",
    idade: 22,
    solteiro: false,
    hobbie: ["surf", "skate", "video-game", "estudar", "academia", "correr"]
}
function mostrarInfoPessoa(obj) {
    console.log(
    `Nome do cliente: ${obj.nome};
    idade: ${obj.idade};
    estado civil: ${obj.solteiro};
    rua: ${obj.endereco.rua};
    cidade: ${obj.endereco.cidade};
    UF: ${obj.endereco.estado}
    `)
    
    //Verifica se existe hobbie
    if (obj.hasOwnProperty('hobbie')) {
        if (obj.hobbie != undefined) {
            console.log("Hobbies: ")
            for (let att of obj.hobbie) {
                hb = att
                console.log(hb)
            }
        }
    }
}
/*



/*
2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
*/

Pessoa.endereco = {
    rua: 'Manuel Martins',
    cidade: 'Sao Paulo',
    estado: 'SP'
};
mostrarInfoPessoa(Pessoa)



/*
3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
*/

const PessoasGeral = [
    {
        nome: 'Andreas',
        idade: 21,
        cidade: 'SP'
    },
    {
        nome: 'Anthony',
        idade: 20,
        cidade: 'MG'
    }
];


function mostrarListaPessoas(arrayPessoas) {
    arrayPessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`) 
    });
}
//Adicionando pessoa nova
PessoasGeral.push({nome: 'Leticia', idade: 17, cidade: 'SP'});

function filtrarPorCidade(pessoas, cidade) {
    if (pessoas.filter(pessoa => pessoa.cidade === cidade)) {
        return pessoas.filter(pessoa => pessoa.cidade === cidade)
    } else {
        return "Nao existem pessoas nessa lista nesta localidade."
    }
}

console.log(filtrarPorCidade(PessoasGeral, 'MG'))




/*
4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
*/

const calculadora = {
    some: function soma(a, b) { return a + b },
    sub: function subtracao(a, b) { return a - b },
    mult: function multi(a, b) { return a * b },
    div: function divisao(a, b) { calculo = a / b; if (b !== 0) {return calculo} else {return "Divisao menor que zero."} },
    calcularMedia: function media(arrayMedia) {
        const soma = arrayMedia.reduce((total, numero) => total + numero, 0);
        return soma / arrayMedia.length;
    }
}

console.log("Soma: " + calculadora.some(5, 3));
console.log("Subtração: " + calculadora.sub(8, 4));
console.log("Multiplicação: " + calculadora.mult(6, 2));
console.log("Divisão: " + calculadora.div(10, 2));
console.log("Divisão por zero: " + calculadora.div(8, 0)); 

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));




/*
5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
*/
const contaBancaria = {
    titular: "Anthony",
    saldo: 800,
    conta: "Ag1808",
    depositar: function depositar(valor) {
        this.saldo += valor;
    },
    sacar: function sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log(`Saldo insuficiente de ${this.saldo}`);
        }
    },
}


const cliente = {
    nome: "Anthony",
    conta: contaBancaria,
}

function mostrarSaldo(cliente) {
    console.log(`Ola, ${cliente.conta.titular}, titular da conta "${cliente.conta.conta}". Seu saldo atual e de: R$ ${cliente.conta.saldo}`
    )
}

function Deposito(cliente, valorDeposito, valorSaque) {
    saldoAnterior = cliente.conta.saldo;
    cliente.conta.depositar(valorDeposito);
    cliente.conta.sacar(valorSaque);
    console.log(`efetuando deposito de ${valorDeposito}...
            Efetuando Deposito...
            Saldo antigo: ${saldoAnterior}
            Saldo atual: ${cliente.conta.saldo}
            Efetuando saque no valor de: ${valorSaque}...
            Saldo Atual = ${cliente.conta.saldo}
        `)
}

//mostrarSaldo(cliente)
Deposito(cliente, 700, 0)

console.log(contaBancaria.saldo);
