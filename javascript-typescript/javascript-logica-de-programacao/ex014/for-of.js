// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)


const nome = "Alexandre";
const nomes = ['alexandre', 'priscila']

// for clássico
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

// for in → pega o índice
for (let i in nome) {
  console.log(nome[i]);
}

// for of → pega o valor
for (let valor of nome) {
  console.log(valor);
}

//for each
nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});
