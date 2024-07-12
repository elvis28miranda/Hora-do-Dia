function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#fcd38c'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'dia.png'
        document.body.style.background = '#6e6c44'
    }else{
        //boa noite
        img.src = 'noitee.png'
        document.body.style.background = '#728691'
    }
}

