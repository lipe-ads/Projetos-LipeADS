let linha = '-----------------------';

//Coercao implicita

console.log(linha);
console.log(5 == '5');
console.log(linha);
console.log(5 === '5');
console.log(linha);

//Numero é convertido para string pois ele entende que o sinal é para concatenação não para soma
console.log(5 + '5');
console.log(linha);

//em outros sinais aritimeticos com string ele vai simplesmente converter de string para numero
console.log('10' - 5);
console.log(linha);
console.log('3' * '2');
console.log(linha);
console.log('20' / '2');
console.log(linha);
console.log(linha);

//Coercao Explicita
let numero = 123;
console.log(typeof numero); //verifica o tipo de variavel
console.log(String(numero)); //transforma tal variavel em um tipo especifico (string) temporariamente
console.log(linha);
console.log(typeof numero); // caso dermos um console.log novamente veremos que o valor em string não foi guardado
console.log(linha);

//Caso queria dar um novo tipo para uma variavel basta fazer:
numero = String(numero);
console.log(typeof (numero));
console.log(linha);
//ou
numero = Number(numero);
console.log(typeof (numero));
console.log(linha);



// Com texto
let texto = 'Meu texto';
console.log(Boolean(texto));