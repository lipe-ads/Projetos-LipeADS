let linha =
  '-----------------------------------------------------------------------------';
console.log(linha);

// Array 2
let lista = ['Monitor', 'Teclado', 'Mouse'];

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(linha);

lista[0] = 'Webcam';
console.log(lista);
console.log(linha);

lista[3] = 'Monitor'; //Podemos adicionar itens dessa forma
console.log(`Adicionado ${lista[3]} a lista`);
console.log(linha);

// Caso nos não saiba o numero de itens da lista e acabar adicionando no indice errado, ira aparecer:
lista[5] = 'MousePad';
console.log(
  `Tem um espaço vazio na lista que ficara escrito assim: ${lista[4]}. Pois não contem nenhum item nesse indice da lista citada`
);
console.log(linha);

// Para sabermos a quantidade de itens na lista usamos:
console.log(lista);
console.log(
  `Usamos length para ver a quantidade de itens na lista. Nessa lista tem: ${lista.length} itens`
);
console.log(linha);

lista.length = lista.length - 2; //Ira tirar dois itens da direita para a esquerda
//Infelizmente, não conseguimos tirar posições especificas
lista[4] = 'MousePad'; //E assim adicionamos novamente o nosso MousePad que era o nosso item 5 no indice 4
console.log(lista);
console.log(linha);

let matrizVendas = [
  [100, 200, 300],
  [400, 500, 50],
  [700, 400, 450],
]; //Podemos adicionar uma Array/lista dentro de outras Arrays dessa forma

console.log(matrizVendas);
console.log(
  `Lista numero 2 no indice 1 da minha lista "mãe" é o ${matrizVendas[1]}`
);
console.log(linha);

// E para acessar itens dentro da lista que ta dentro de outra lista, usamos:

console.log(
  `O numero de vendas maior foi da lista ${matrizVendas[2]} que contem o numero de venda ${matrizVendas[2][0]}`
); //Aqui estou dizendo qe quero acessar o indice 2 da minha lista matriz e dentro dela quero acessar o indice 0
// De uma forma mais clara:
console.log(matrizVendas[2][0]);

console.log(linha);

// Para efetuar as mudanças é na mesma ideia...
matrizVendas[2][0] = 1200;
console.log(
  `Agora o indice 0 da lista com indice 2 contem o numero alterado para: ${matrizVendas[2][0]}`
);
console.log(linha);

//Eu tambem consigo somar os valores dentro das listas usando os indices dos itens dentro das listas
let resultadoLojaA =
  matrizVendas[0][0] + matrizVendas[0][1] + matrizVendas[0][2];
console.log(resultadoLojaA);
console.log(`O numero de vendas da Loja A foi de: ${resultadoLojaA}`);
console.log(linha);

let resultadoLojaB =
  matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);
console.log(`O numero de vendas da Loja B foi de: ${resultadoLojaB}`);
console.log(linha);

let resultadoLojaC =
  matrizVendas[2][0] + matrizVendas[2][1] + matrizVendas[2][2];
console.log(resultadoLojaC);
console.log(`O numero de vendas da Loja C foi de: ${resultadoLojaC}`);
console.log(linha);
