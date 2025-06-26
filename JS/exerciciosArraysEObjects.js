let linha = '-----------------------------------------------------------';
console.log(linha);

/*Exercício 1: Manipulação de Array - parte 1
a. Crie um array chamado produtos contendo três nomes de produtos.
b. Acesse e imprima o segundo produto.
c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado */

let produtos = ['DDR4', 'Teclado', 'Cadeira Gamer'];
console.log(produtos[1]);
console.log(produtos);
produtos[2] = 'Notebook';
console.log(produtos);
console.log(linha);

/*Exercício 2: Manipulação de Array - parte 2
a. Crie um array chamado clientes contendo três nomes de clientes.
b. Adicione um quarto cliente ao array.
c. Remova o último cliente e imprima o array atualizado.
*/

let clientes = ['Felipe', 'Fulano', 'Ciclano'];
console.log(clientes);

clientes[3] = 'Bertrano';
console.log(clientes);

clientes.length = clientes.length - 1;
console.log(clientes);
console.log(linha);

/*Exercício 3: Manipulação de Objetos - parte 1
a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
b. Acesse e imprima o nome do produto.
c. Modifique o preço do produto e imprima o objeto atualizado*/

let Felipe = {
  altura: 1.62,
  peso: '55 kg',
  cursandoGraduação: true,
};
console.log(Felipe.altura);

Felipe.peso = "48 Kg";
console.log(Felipe)
console.log(linha);

/*Exercício 4: Manipulação de Objetos - parte 2
a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
b. Adicione a propriedade data ao objeto.
c. Remova a propriedade produto e imprima o objeto atualizado*/

let venda = {
  clientes: 10,
  produto: "Acer Nitro 5",
  valor: 5600,
}
venda.dadosData = Date()
console.log(venda)

delete venda.produto
console.log(venda)
console.log(linha);

/*Exercício 5: Manipulação dos Tipos Referências
a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
c. Crie um objeto funcionario e atribua seus valores para um novo objeto
novoFuncionario.
d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
alterado.*/

let estoque = ["Bola", "Jogos", "Volei"]
let novoEstoque = [...estoque]
console.log(novoEstoque)

novoEstoque[1] = "Tenis"
console.log(novoEstoque)

let funcionario = {
  nome: "Felipe",
  metaEmpresa: "Globo || Itau"
  ,salario: 30000,
}

let funcionario1 = {...funcionario};//Devo admitir... não sabia dessa
funcionario1.nome = "Fulano";
console.log(funcionario)
console.log(funcionario1)
console.log(linha);