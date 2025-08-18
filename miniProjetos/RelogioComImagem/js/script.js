function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();/*!*/
  var saudacao = document.getElementById('saudacao');

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = 'js/img/GPTmanha_250x250.png';
    document.body.style.background = '#FFC73E';
    saudacao.innerText = 'Bom dia!';
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'js/img/GPTtarde_250x250.png';
    document.body.style.background = '#968024';
    saudacao.innerText = 'Boa tarde!';
  } else {
    img.src = 'js/img/GPTnoite_250x250.png';
    document.body.style.background = '#082A52';
    saudacao.innerText = 'Boa noite!';
  }
}
