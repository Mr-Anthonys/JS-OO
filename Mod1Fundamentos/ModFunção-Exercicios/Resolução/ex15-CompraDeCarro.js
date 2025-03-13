let car = ''

function getBuyCar(car) {
    car = car.toLowerCase()

    function retira_acentos(car) {
        com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
        sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        novastr = "";

        for (i = 0; i < car.length; i++) {
            troca = false;
            for (a = 0; a < com_acento.length; a++) {
                if (car.substr(i, 1) == com_acento.substr(a, 1)) {
                    novastr += sem_acento.substr(a, 1);
                    troca = true;
                    break;
                }
            }
            if (troca == false) {
                novastr += car.substr(i, 1);
            }
        }
        return novastr;
    }

    switch (retira_acentos(car)) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!');
            break;
        case 'sedan':
            console.log('Tem certeza que prefere este modelo?')
            break;
        case 'motocicleta':
            console.log('Tem certeza que prefere este modelo?')
            break;
        case 'moto':
            console.log('Tem certeza que prefere este modelo?')
            break;
        case 'caminhonete':
            console.log('TEm certeza que prefere este modelo?')
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

getBuyCar(car);