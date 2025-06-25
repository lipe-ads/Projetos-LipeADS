let linha = "----------------------"
console.log(linha)

// Objeto

let carro = {
  marca: "Mercedes-Benz",
  modelo: "Class S",
  ano: 2025,
  cor: "Prata",
  airbag: true,
  itens: ["Abs", "Piloto Automatico", "Leds"]
}

// Acessar os valores das propriedades (Chaves)
// Quando queremos acessar as propriedades usamos o nome da nossa variavel mais um . e o nome da propriedade:
console.log(`A marca do meu carro é: ${carro.marca}`);
//E isso vale pra todas as propriedades:
console.log(`O ano do meu carro é: ${carro.ano}`);
console.log(`A cor do meu carro é: ${carro.cor}`);
console.log(`o Airbag do meu carro está funcionando? ${carro.airbag}`);
console.log(`Os itens do meu carro são: ${carro.itens}`);
console.log(linha)

// Para conseguir modificar algo, fica assim:
carro.airbag = false;
console.log(`o Airbag do meu carro está funcionando? ${carro.airbag}`);
// Isso tambem funciona pras listas dentro das nossas propriedades:
carro.itens[0] = "Automatico";
console.log(`Os itens do meu carro são: ${carro.itens}`);
console.log(linha)

// Para adicionar novos itens dentro das listas das propriedades é igual fazemos com arrays
carro.itens[3] = "Protetor de Banco";
console.log(`Adicionei o item: ${carro.itens[3]}, na minha lista de itens`);
console.log(linha)


// Para podermos adicionar uma nova propriedade, basta colocar o nome da nossa variavel mais o . e o nome da nova proproedade:
carro.kmRodado = 12000;
console.log(`A quantidade de Km rodado do meu carro é de: ${carro.kmRodado}`);
console.log(linha)

// Aqui vemos que a nova propriedade foi sim adicionada
console.log(carro)
