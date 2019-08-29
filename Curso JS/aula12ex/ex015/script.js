function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique o ano novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA HOMEM
                img.setAttribute('src', 'menino-bebe.png')
            } else if (idade < 21) {
                //JOVEM HOMEM
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 60) {
                //ADULTO HOMEM
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //SENHOR HOMEM
                img.setAttribute('src', 'homem-senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA MULHER
                img.setAttribute('src', 'menina-bebe.png')
            } else if (idade < 21) {
                //JOVEM MULHER
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 65) {
                //ADULTO MULHER
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //SENHORA MULHER
                img.setAttribute('src', 'mulher-senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}