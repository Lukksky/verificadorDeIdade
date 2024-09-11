function verificar() {
    var data = new Date()
    var year = data.getFullYear()
    const yearOfBirth = document.querySelector('input#txtano')
    const val = document.querySelector('div#res')

    if (yearOfBirth.value.length == 0 || yearOfBirth.value > year ) {
        window.alert ('Verifique os dados e tente novamente!')
    
    } else {
        const fsex = document.getElementsByName('radsex')
        const age = year - Number(yearOfBirth.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gender = 'Homem'
            if (age > 0 && age < 12) {
                gender = 'Criança'
                img.setAttribute('src', 'criança-menino.png')
            
            } else if (age < 20) {
                gender = 'Jovem'
                img.setAttribute('src', 'jovem-garoto.png')
            
            } else if (age < 59) {
                gender = 'Adulto'
                img.setAttribute('src', 'homem.png')
            
            } else {
                gender = 'Idoso'
                img.setAttribute('src', 'homem-idoso.png')
            }
        
        } else if (fsex[1].checked) {
            gender = 'Mulher'
            if (age > 0 && age < 12) {
                gender = 'Criança'
                img.setAttribute('src', 'criança-menina.png')
            
            } else if (age < 20) {
                gender = 'Jovem'
                img.setAttribute('src', 'jovem-garota.png')
            
            } else if (age < 59) {
                gender = 'Adulto'
                img.setAttribute('src', 'mulher.png')
            
            } else {
                gender = 'Idoso'
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }

        val.style.textAlign = 'center'
        img.style.padding = '8px'
        val.innerHTML = `Detectamos ${gender} com ${age} anos!`
        val.appendChild(img)
    }

}