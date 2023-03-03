// atribuição via desestruturação (objects)

const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brtasil",
    numero: 320,
  },
};

// Atribuição via desestruturação
const {
  nome: teste = "",
  sobrenome,
  endereco: { rua, numero },
} = pessoa;

console.log(teste, sobrenome, rua, numero);
