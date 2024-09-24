
function criarPerfil() {
 //   let nome = document.getElementById("nome");
 //   let idade = document.getElementById("idade");
 //   let jogo = document.getElementById("jogo");

/*
    if (idade < 18) {
        jogo.innerHTML("Menor de Idade!");
    } else if (idade >= 18 && idade < 30) {
        jogo.innerHTML("Jovem!");
    } else {
        jogo.innerHTML("Adulto!");
    }
*/

    //Switch Case
    let fruta = "uva"

    switch (fruta) {
        case "laranja":
            return "Suco de Laranja";
            break;
        
        case "Morango":
            return "Suco de Morango";
            break;

        case "UVA".toUpperCase():
        case "banana":
        case "abacate":
            return "Vitamina"
            break;

        default:
            return "Água"
            break;
    }

    console.log(fruta())
}

console.log(criarPerfil())


function fazerTorrada(pao) {
    if (opcao = 1) {
        return "Pão françês é na frigideira."
    } else if (pao = 2) {
        return "Pão de forma é na torradeira."
    } else if (pao = 3) {
        return "não possuimos pão."
    }
}



console.log(fazerTorrada(1))