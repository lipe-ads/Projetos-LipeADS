
function Analisar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'homemCrianca.png')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'homemJovem.png')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', 'homemAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemIdoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'mulherCrianca.png')
            }else if(idade<21){
                img.setAttribute('src', 'mulherJovem.png')
            }else if (idade <50){
                img.setAttribute('src', 'mulherAdulta.png')
            }else {
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}