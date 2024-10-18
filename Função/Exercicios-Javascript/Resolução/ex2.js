function TiposTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
        return "Equilatero"
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        return "Escaleno"
    } else {
        return "Isosceles"
    }
}

console.log(TiposTriangulo(2, 1, 2))


/*

let hipotenusa = 6**2
let cat1 = 4
let cat2 = 3

let resultado = (Math.pow(cat1, 2) + Math.pow(cat2, 2))  

console.log(resultado / hipotenusa) 

*/