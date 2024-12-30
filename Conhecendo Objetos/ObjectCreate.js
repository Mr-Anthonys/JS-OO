const personagem1 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

const personagem2 = Object.create(personagem1)
personagem2.nome = "Saruman"
console.log(personagem2)