// Selecionar os elementos
const calendarioGrid = document.querySelector('.calendario-grid');
const MesAno = document.querySelector('.mes-ano');
const AntgMesBtn = document.querySelector('.prev-mes');
const proxMesBtn = document.querySelector('.next-mes');

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

let data = new Date();

// funções
const renderCalendario = () => {
  const diaNumeros = calendarioGrid.querySelectorAll('.dia-numero');
  diaNumeros.forEach((dia) => dia.remove());

  // pega a data atual
  const hoje = new Date(/*2025,07,25*/);

  // Calcula a dara de inicio do mes atual
  const PrimeiroDiaDoMes = new Date(
    data.getFullYear(),
    data.getMonth(),
    1
  ).getDay();

  //pega o ultimo dia do mes atual
  const UltimoDiaDoMes = new Date(
    data.getFullYear(),
    data.getMonth() + 1,
    0
  ).getDate();

  // pega o ultimo dia do mes anterior para calcular os dias inativos
  const UltimoDiaDoUltimoMes = new Date(
    data.getFullYear(),
    data.getMonth(),
    0
  ).getDate();

  // Atualiza o texto do cabeçalho com mes e ano
  MesAno.innerText = `${meses[data.getMonth()]} de ${data.getFullYear()}`;

  // Cria os dias do nes abterior que ficaram inativos
  for (let i = PrimeiroDiaDoMes; i > 0; i--) {
    const dia = document.createElement('div');
    dia.classList.add('dia-numero', 'inativo');
    dia.innerText = UltimoDiaDoUltimoMes - i + 1;
    calendarioGrid.appendChild(dia);
  }

  // Cria os dias do mes atual
  for (let i = 1; i <= UltimoDiaDoMes; i++) {
    const dia = document.createElement('div');
    dia.classList.add('dia-numero');
    dia.innerText = i;

    // adicionar a classe de destaque se for o dia de hoje
    if (
      i === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    ) {
      dia.classList.add('current-dia');
    }

    dia.addEventListener('click', () => {
      console.log(`Você clicou no dia ${i} de ${meses[data.getMonth()]}`);
    });
    calendarioGrid.appendChild(dia);
  }
};

// Adiciona eventos nos botoes de navegação
AntgMesBtn.addEventListener('click', () => {
  data.setMonth(data.getMonth() - 1);
  renderCalendario();
});

proxMesBtn.addEventListener('click', () => {
  data.setMonth(data.getMonth() + 1);
  renderCalendario();
});

renderCalendario();

//
function gerarFraseAleatoria() {
  const frases = [
    'A paciência é um dos elementos chave para o sucesso.',
    'Um dos meus dias mais produtivos foi quando eu joguei fora 1000 linhas de código.',
    'Se você mostrar o problema às pessoas, e indicar uma solução, elas se mobilizarão para agir.',
    'Não é a linguagem de programação que define o programador, mas sim sua lógica.',
    'A genialidade é 1% inspiração e 99% transpiração.',
    'O sucesso é uma soma de pequenos esforços repetidos dia após dia.',
    'Uma pessoa que diz que não pode ser feita não deve interromper a pessoa que está fazendo.',
    'Se você decidir que fará apenas o que sabe que dará certo, deixará um monte de oportunidades para trás.',
    'A vida não é fácil para nenhum de nós. Temos que ter persistência e, acima de tudo, confiança em nós mesmos.',
    'A força da equipe é cada membro individual. A força de cada membro é a equipe.',
    'Grandes coisas nunca vêm de zonas de conforto.',
    'Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.',
    'O maior risco é não assumir nenhum risco.',
    'A persistência realiza o impossível.',
    'Falhar é apenas a oportunidade de começar de novo, com mais inteligência.',
    'Nenhum vento sopra a favor de quem não sabe para onde ir.',
    'O aprendizado nunca esgota a mente.',
    'A sorte favorece a mente preparada.',
    'Não espere por oportunidades, crie-as.',
    'Sonhos não funcionam a menos que você trabalhe duro.',
    'Não é sobre ter tempo, é sobre fazer tempo.',
    'Grandes programadores não são definidos por quantas linguagens sabem, mas pela forma como resolvem problemas.',
    'Cada bug encontrado é uma oportunidade de aprender.',
    'O código limpo é simples e direto.',
    'Um bom programador olha para ambos os lados antes de atravessar uma rua de mão única.',
    'Sempre escreva código como se a pessoa que for mantê-lo fosse um psicopata que sabe onde você mora.',
    'Programar é transformar lógica em realidade.',
    'Um software é apenas tão bom quanto a clareza do seu código.',
    'A única maneira de fazer um ótimo trabalho é amar o que você faz.',
  ];

  const numeroAleatorio = Math.floor(Math.random() * 10);
  const frase = frases[numeroAleatorio];
  /**
   * o math.random() gera numero aleatorios de 0 - 1, mas podemos colocar qual a regra, como por exemplo colocamos o "* 10" na frente que significa que tera 10 numeros e o intervalo é de 0 - 9
   *
   * Já o "math.floor(numero)" ele faz com que um numero quebrado vire um numero inteiro, arredondando-o para o numero inteiro mais proximo
   */
  document.getElementById('frase').innerHTML = frase;
}
