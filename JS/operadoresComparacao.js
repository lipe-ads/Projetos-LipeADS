let linha = '---------------------';
console.log(linha);

//Comparação e desigualdade
//para fazer comparações de valores sem restrigir tipos (string ou number) usamos ==
console.log(5 == '5');
console.log(linha);

//para fazer comparações de valores que restrinja a tipos e valores usamos ===
console.log(5 === '5');
console.log(linha);

//Para desigualdade é a mesma coisa so muda os sinais
//!=
console.log(5 != '5');
console.log(linha);

//!==
console.log(5 !== '5');
console.log(linha);


//Maior e menor
console.log(10>=10); //maior ou igual
console.log(linha);
console.log(10>10); //maior que
console.log(linha);
console.log(10<=10); //menor ou igual
console.log(linha);
console.log(10<10);  //menor que
console.log(linha);


//Explicação com exemplo:

let senha = 1234;
let senhaDigitada = 1234;
let comparacao = senha === senhaDigitada;
console.log("Aqui é a minha senha: " + comparacao)

