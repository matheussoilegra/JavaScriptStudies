function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e4d48da1'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.jpg'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#1B132A'
    }
}