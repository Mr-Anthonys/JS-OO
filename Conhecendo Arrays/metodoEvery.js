//USANDO METODO EVERY
const isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;
}

const array = [1, 2, 3, 4, 5, 6, 7];

array.every(isEven); //Nesse caso sera no primeiro elemento, 1, executando apenas uma vez

//EVERY analisa cada elemento do array ate que a funcao devolve FALSE



//USANDO METODO SOME
const isPair = function (y) {
    console.log(y);
    return (y % 2 == 0) ? true : false;
}

const outroArray = [1, 2, 3, 4, 5, 6, 7];

outroArray.some(isPair); //Ja no metodo some ele ira retornar ate que seja true

//SOME analisa cada elemento do array ate que a funcao devolve TRUE