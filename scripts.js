function carregar () {
    var hr = document.querySelector('div#hrs')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    minutos = minutos < 10 ? '0' + minutos : minutos

    if (hora >= 0 && hora < 12) {
        hrs.style.background = '#DAE8E3'
    } else if (hora >= 12 && hora <= 18) {
        hrs.style.background = '#FDE8D3'
    } else {
        hrs.style.background = '#657166'
    }

    var mensagem1 = `Agora são <strong>${hora}:${minutos}</strong>hr, não perca tempo, peça seu orçamento agora!`
    var mensagem2 = `Seu projeto com a melhor equipe!`

    var contador = 0

    setInterval(() => {
        if (contador % 2 === 0) {
            hr.innerHTML = mensagem1;
        } else {
            hr.innerHTML = mensagem2;
        }
        contador++;
    }, 3000);

    carregar()

}