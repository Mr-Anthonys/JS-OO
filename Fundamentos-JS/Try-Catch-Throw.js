function tratarErro(error) {
    //throw new Error ('ERRO 404!')
        throw {
            date: new Date
        }
}


function Erro404(obj) {
    try {
        console.log(obj.name.toUpperCase())
    } catch(erro) {
        tratarErro(erro)
    } finally { 
        console.log('Talvez resolva')
    }
}

const obj = {nome: 'Anthony'}
Erro404(obj)