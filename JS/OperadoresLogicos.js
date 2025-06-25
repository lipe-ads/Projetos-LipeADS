let linha = '--------------------';
console.log(linha);

// && (And) - ambas as condições são verdadeiras
let idade = 20;
let codigoPromocional = true;

//Verificando se o usuario tem idade o suficiente E possui o codigo
let FazerLogin = idade >= 18 && codigoPromocional == true;
console.log(FazerLogin);
console.log(linha);

// || (OR) - apenas uma condição é verdadeira

//Verificando se o usuario tem idade o suficiente OU possui o codigo

let idadeor = 15;
let codigoPromocionalor = true;

let FazerLoginor = idadeor >= 18 || codigoPromocionalor == true;
console.log(FazerLoginor);
console.log(linha);

// ! (NOT) - Inverte o valor bolleano

let perfilconfigurado = false; //Perfil não configurado

//verificação
let alerta = !perfilconfigurado; // Alerta é verdadeiro se o perfil configurado for igual como falso
console.log(alerta)

//A maior utilidade do NOT é verificar se há algo desligado que precisa ligar outra coisa

//No exemplo vimos se o perfil configurado for igual a false então ele ativara outro comando que nesse caso é o alerta
