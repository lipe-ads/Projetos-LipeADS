let linha = '--------------------------------------';
console.log(linha);

/*Atividade 1

Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
produto após aplicar o desconto e o imposto.
*/
let produto = 200;
let desconto = 40;
let imposto = 12;

let precoFinal = produto - desconto + imposto;

console.log(precoFinal);
console.log(linha);

/* Atividade 2
Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional
de R$ 30,00. Calcule o preço de venda do produto*/

let produto2 = 100;
let taxaadicional = 30;

console.log(produto2 + taxaadicional);
console.log(linha);

/*Atividade 3
Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
é R$ 300,00 */

let produto3 = 300;
let orcamento = 250;
let desconto3 = 50;

let precoComDesconto = produto3 - desconto3;
let estaNoOrcamento = precoComDesconto == orcamento;

console.log(precoComDesconto);
console.log(estaNoOrcamento);
console.log(linha);

/*Atividade 4
Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um
estoque como uma string ("20") e outra que representa a quantidade mínima necessária de
produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é
suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um
número. Imprima no console se a quantidade é suficiente ou não.
*/

let produtoEstoque = '20';
let quantidadeMinima = 20;

produtoEstoque = Number(produtoEstoque);

let suficienteEstoque = produtoEstoque >= quantidadeMinima;
console.log(suficienteEstoque);
console.log(linha);

/*Atividade 5
Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como
um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
está disponível e tem a quantidade suficiente.*/

let disponivel = true;
let estoqueProduto = 10;
let minimoEstoque = 15;

let quantidadeSuficiente = estoqueProduto >= minimoEstoque;

console.log(quantidadeSuficiente);

let tudoOk = disponivel && quantidadeSuficiente;

console.log(tudoOk);
