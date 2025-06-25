let valor = 10;
let segundovalor = -43;
let base = 2;
let expoente = 3;
let linha = '------------------------------------';


// Adição
console.log(valor + segundovalor);
console.log(linha)

// Subtração
console.log(valor - segundovalor);
console.log(linha)

// Divisão

console.log(valor / segundovalor);
console.log(segundovalor / valor);
console.log(linha)

// Operadores Aritimeticos

//Exponenciação **
let resultado = base ** expoente;
//2 seja elevado a 3
console.log(resultado);
console.log(linha);

//Incremento ++(Adicionar o valor1) Decremento -- (diminuir o valor 1)

let controle = 0;
//Se o simbolo esta antes da variavel então primeiro ele vai ler e mostrar o resultado pra depois fazer o calculo matematico
console.log(controle++);
//E quando chamarmos ele novamente, nos veremos que ele foi alterado
console.log(controle);
console.log(controle++);
console.log(controle);
console.log(controle++);
console.log(controle);
console.log(linha);
//O mesmo serve para o decremento --

controle = 0;
//Caso não quisermos aquela repetição que mostra no terminal, nos podemos colocar o encremento ou decremento antes da nossa variavel que assim o calculo matematico ira ser efetuado antes e depois ira mostrar nossa variavel com o valor ja atualizado
console.log(--controle);
console.log(--controle);
console.log(--controle);
console.log(linha);
