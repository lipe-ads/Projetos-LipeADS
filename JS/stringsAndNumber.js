// Strings

// "um texto" - String
// 'Criar uma mensagem' - String
// `Criar mais um texto` - string template

let mensagem = 'Olá, ';
let nome = 'Paulo';
let mensagem2 = `Olá, ${nome}. Bem vindo!`;

console.log(mensagem + nome + '. Bem vindo!');
console.log(mensagem2);

// indice = 0
// nome = 0-P 1-a 2-u 3-l 4-o

console.log(nome[3]);
console.log((nome[3] = 'Q')); //Por não estar armazenada e não poder alterar o valor ele ira mostrar que a quarta letra pedida é Q mas caso peça novamente verá que na verdade é L e ele so mostrou por ter sido atribuida de forma temporaria

// Number

let numeroInteiro = 30;
let numeroNegativo = -50;
let numberdecimal = 6.78528555;

console.log(numeroInteiro);

// Infinity e NaN Veremos em loops e verificações se é um numero ou não

let string = '10';
let dez = 10;
console.log(string + dez);
console.log(`${string} ${dez}`);
