
var neutro = document.querySelector('.neutro')
var triste = document.querySelector('.triste')
var feliz = document.querySelector('.feliz')
var mensagem = document.getElementById('mensagem');
var body = document.body

document.querySelector('.feliz').addEventListener('click', () => {
    mensagem.textContent= "Hoje estou super animado! 😄";
    body.style.backgroundColor ='rgb(115, 238, 150)';
    feliz.style.backgroundColor ='rgb(49, 158, 58)';
    feliz.style.color = 'rgb(255,255,255)';
});
document.querySelector(".neutro").addEventListener("click", () => {
    mensagem.textContent = "Hoje estou tranquilo, só observando... 😐";
    body.style.backgroundColor ='rgb(246, 248, 144)';
    neutro.style.backgroundColor = 'rgb(206, 219, 23)';
    neutro.style.color = 'rgb(255,255,255)';
  });
  
  document.querySelector(".triste").addEventListener("click", () => {
    mensagem.textContent = "Hoje estou meio pra baixo... 😢";
    body.style.backgroundColor ='rgb(241, 137, 137)'; 
    triste.style.backgroundColor = 'rgb(160, 36, 36)';
    triste.style.color = 'rgb(255, 255, 255)';
  });

  /*document.querySelector('alegre').addEventListener('mouseleave', () =>{
    alegre.style.backgroundColor = '#rgb(255, 255, 255)';
    alegre.style.color = '#rgb(0, 0, 0)'
  }
  )*/