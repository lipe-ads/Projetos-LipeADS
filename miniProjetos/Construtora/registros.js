const registros = document.querySelectorAll('.ExibicaoRegistros-ul li');
const ArrayRegistros = Array.from(registros);
const listaRegistros = document.querySelector('.ExibicaoRegistros-ul');

// Função que exibe todos os itens
function exibirTodosOsItens(ArrayRegistros) {
  listaRegistros.innerHTML = '';

  // Percorrer o Array com Dados
  ArrayRegistros.forEach((registro) => {
    const Id = registro.querySelector('.item-id').textContent;
    const Processo = registro.querySelector('.item-processo').textContent;
    const Colaborador = registro.querySelector('.item-colaborador').textContent;
    const Data = registro.querySelector('.item-data').textContent;

    // CRia um novo LI
    const novoItem = document.createElement('li');
    novoItem.classList.add('ExibicaoRegistros-itens');

    // Cria o HTML
    novoItem.innerHTML = `
      <div class="item-id">${Id}</div>
      <div class="item-processo">${Processo}</div>
      <div class="item-colaborador">${Colaborador}</div>
      <div class="item-data">${Data}</div>
      `;

    listaRegistros.appendChild(novoItem);
  });
}

exibirTodosOsItens(ArrayRegistros);

// Função que exibe os itens por colaboradores

const inputColaborador = document.getElementById('colaborador-filter');

inputColaborador.addEventListener('keyup', (event) => {
  const nomeBuscado = event.target.value;

  filtrarColaborador(nomeBuscado);
});

function colaboradorFilter(nomeBuscado) {
  const nomeBuscadoMinusculo = nomeBuscado.toLowerCase();
  const registrofiltrado = ArrayRegistros.filter((registro) => {
    const nomeColaborador = registro
      .querySelector('.item-colaborador')
      .textContent.toLowerCase();

      return nomeColaborador.includes(nomeBuscadoMinusculo)
  });
  exibirTodosOsItens(registrofiltrado)
}

// ???
