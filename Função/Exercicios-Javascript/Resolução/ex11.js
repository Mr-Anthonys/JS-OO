/*
11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false.  
*/

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}


let getYear = getRandomNumber(1000, 5000)


function verificarAnoBissexto(getYear) {
    intYear = parseInt(getYear);

    if (intYear % 400 == 0) {
        console.log(`${true} {Esse ano é bissexto: ${intYear}!! 400 em 400 anos`)
    } else if (intYear % 100 == 0) {
        console.log(`${false} {Esse ano não é bissexto: ${intYear}!! 100 em 100 anos`)
    } else if (intYear % 4 == 0) {
        console.log(`${true} {Esse ano é bissexto: ${intYear}!! 4 em 4 anos.`)
    } else {
        console.log(`${false} {Esse ano não é bissexto: ${intYear}!! Divisivel nem por 400, 100 e nem 4.`)
    }
} 

verificarAnoBissexto(getYear)