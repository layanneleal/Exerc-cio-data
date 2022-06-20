function verificar() {
	
	// instanciando função de data
  var data = new Date()
  // pegando ano da função date
  var ano = data.getFullYear()
  // atribuindo ao componente ano
  var fano = document.getElementById('txtano')
  // capturando componente de resultado
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
   	window.alert('[ERRO] verifique os dados e tente novamente!')
  } else {

    var fsex = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')

	 // CRIA UM ATRIBUTO DE ID PARA A TAG IMG DA FOTO
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {

      gênero = 'Homem'

		 // PRIMEIRA PARTE DA CONDICAO = MASCULINO
      if (idade >= 0 && idade < 10) {
       //criança
		 img.setAttribute('src', 'foto-bebe-m.png')
      } else if (idade < 21 ) {
       //jovem
		 img.setAttribute('src', 'foto-crianca-m.png')
      } else if (idade < 50) {
      //adulto
		 img.setAttribute('src', 'foto-adulto-m.png')
      } else {
      //idoso
		 img.setAttribute('src', 'foto-idoso-m.png')
      }

    }
    // SEGUNDA PARTE DA CONDICAO = FEMININO
    else if (fsex[1].checked) {

		gênero = 'Mulher'

		if (idade >= 0 && idade < 10) {
			//criança
			img.setAttribute('src', 'foto-bebe-f.png')
		} else if (idade < 21 ) {
			//jovem
			img.setAttribute('src', 'foto-crianca-f.png')
		} else if (idade < 50) {
			//adulto
			img.setAttribute('src', 'foto-adulto-f.png')
		} else {
			//idoso
			img.setAttribute('src', 'foto-idoso-f.png')
		}

    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
	 res.appendChild(img)

  }
}
