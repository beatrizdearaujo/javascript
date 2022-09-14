function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    //var hora = 22
    //msg.innerHTML = `Agora são ${hora} horas`

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    
    if (hora >= 0 && hora < 12)
    {
        //BOM DIA!!
        img.src = 'manha.jpg'
        document.body.style.background = '#F5D0A9'
    }
    else if (hora >= 12 && hora <= 18)
    {
        //BOA TARDE!!
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else
    {
        //BOA NOITE!!
        img.src = 'noite.jpg'
        document.body.style.background = '#071019'
    }
}