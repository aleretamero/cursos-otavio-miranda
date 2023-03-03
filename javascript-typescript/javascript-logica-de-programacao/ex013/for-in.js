// for in -> lê os índices ou chaves do objeto

const frutas = ["Pera", "Maça", "Uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Alexandre",
  sobrenome: "Retamero",
  idade: 30,
};

for (let key in pessoa) {
  console.log(pessoa[key]);
}
