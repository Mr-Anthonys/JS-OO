/*
Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/


function RamdomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    number = Math.floor(Math.random() * (max - min) + min)
    return number
}

let numeroExtenso = RamdomNumber(0, 10);

function readingNumber(numeroExtenso) {
    
    switch (numeroExtenso) {
        case 1:
            console.log("UM")
            break;
        case 2:
            console.log("DOIS")
            break;
        case 3:
            console.log("TRES")
            break;    
        case 4:
            console.log("QUATRO")
            break;   
        case 5:
            console.log("CINCO")
            break;    
        case 6:
            console.log("SEIS")
            break;
        case 7:
            console.log("SETE")
            break;
        case 8:
            console.log("OITO")
            break;
        case 9:
            console.log("NOVE")
            break;
        case 10:
            console.log("UM")
            break;
        default:
            console.log("Número fora do intervalo.")
    }
}

readingNumber(numeroExtenso);