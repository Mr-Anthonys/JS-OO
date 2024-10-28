let fruta = 'Maçã';

function getFruit(fruta) {

    frutaMin = fruta.toLowerCase();


    function retira_acentos(frutaMin) {
        com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
        sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        novastr = "";

        for (i = 0; i < frutaMin.length; i++) {
            troca = false;
            for (a = 0; a < com_acento.length; a++) {
                if (frutaMin.substr(i, 1) == com_acento.substr(a, 1)) {
                    novastr += sem_acento.substr(a, 1);
                    troca = true;
                    break;
                }
            }
            if (troca == false) {
                novastr += frutaMin.substr(i, 1);
            }
        }
        return novastr;
    } 



    switch (retira_acentos(frutaMin)) {
        case 'maca':
            console.log(`Não vendemos essa fruta aqui: ${fruta}`)
            break;
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}`)
            break;
        case 'melancia':
            console.log(`Aqui está, são 3 reais o quilo da ${fruta}`)
            break;
        default:
            console.log(`Erro no Console!`)
    } 
}

getFruit(fruta)