//funcao de forma literal
function fun1() { 

}


//armazenar em uma variavel
const fun2 = function() {

}


//Armazenar em um Array
const array = [function(a, b) {
    return a + b 
}, fun1, fun2]
console.log(array[0](2, 3))


//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {
    return 'Falando!!'
}

console.log(obj.falar())


//Função como parametro
function run(fun) {
    fun()
}
run(function() {
    console.log('Executando!!')
})


//Pode retornar / conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3) (4)
const cincoMais = soma(2, 3)
cincoMais(4)


