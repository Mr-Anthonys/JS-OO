function greet() {
    console.log(`Hello, my name is ${this.name}`)
}

const person = {
    name: 'John'
}

const person2 = {
    name: 'Anthony'
}

const person3 = {
    name: 'Mary'
}
/*

*********IMPORTANTE*********
Callback da função greet é o objeto person
O método call() chama uma função com um dado valor this e argumentos passados individualmente.


*********IMPORTANTE*********
apply é um método que permite chamar uma função em um contexto específico
O método apply() chama uma função com um dado valor this e arguments fornecidos como uma array 
(ou um objeto parecido com um array).



*********IMPORTANTE*********
bind() é um método que cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor 
fornecido
*/
greet.apply(person);
greet.call(person2);
greet.bind(person3)(); // O bind retorna uma função que pode ser chamada posteriormente

