let linha = '-------------------------------------';
console.log(linha);

// Objetos 2
let livro = {
  titulo: 'Os Inovadores',
  autor: 'Walter Isaacson',
  ano: 2021,
  genero: 'Tecnologia',
  leitores: ["Felipe", "Fulano", "Ciclano"],
};

livro.paginas = 590;
console.log(`O numero de paginas do meu livro é de: ${livro.paginas} paginas.`);
console.log(linha);

// Para apagar alguma propriedade:
delete livro.paginas;
console.log(livro);
console.log(linha);

// Para verificarmos se tem alguma propriedades da nossa variavel que vc ersteja na duvida se existe ou não, caso não apareça de sugestão. basta:
console.log("autor" in livro); //in significa "dentro de" e na frente colocamos dentro de qual variavel vai fazer a busca
console.log(linha);

console.log("paginas" in livro);



