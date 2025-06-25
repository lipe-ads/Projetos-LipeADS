let linha = '----------------------------------------';
console.log(linha);

let listaA = [1, 2, 3]; //Define uma lista dentro de uma variavel
console.log(listaA);
console.log(linha);

let listaB = listaA; //Atribui uma variavel dentro de outra variavel, que se chama REFERENCIA
listaB[0] = 99; // E qualquer alteração feita em um indice na variavel atribuida ira ser feita no outro indice da variavel REFERENCIA
console.log(listaA);
console.log(listaB);
console.log(linha);

// Outro exemplo de alteração é uma adição:
let objA = { nome: 'Felipe' };
let objB = objA;
console.log(objA);
console.log(objB);
console.log(linha);

objB.idade = 19; //Vemos que para fazer uma adição em uma propriedade é da mesma forma que fazemos quando se trata de object, basta adicionar o . mais o nome e atribuir um valor
console.log(objA);
console.log(objB);
console.log(linha);

//------------------Outro Exemplo---------------------//
let string = 'Olá';
let mensagem = string;
console.log(string);
console.log(mensagem);
console.log(linha);

mensagem = 'Olá, Felipe'; //Por eu ter alterado o conteudo da minha string Mensagem, a referecia foi substituida por uma mensagem nova
console.log(mensagem);
console.log(string);
console.log(linha);

// Caso queira usar alguma variavel como referencia mas sem alterar a variavel referencia, basta fazer uma copia, dessa forma:
let listaC = [...listaA]; //Usamos o cochete [] mais os tres pontos dentro do cochete acompanhado com o nome da variavewl que sera copiada. E qualquer alteração feita na lista que pegou uma copia não ira ser atribuida na lista que foi copiada
console.log(listaA);
console.log(listaC);
console.log(linha);

//Exemplo:
listaC[3] = 100; //Adicionei um novo numero na lista
console.log(listaC);
console.log(listaA); //Podemos ver que não houve alteração
