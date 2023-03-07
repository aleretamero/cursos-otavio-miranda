// Funçao criada com a palavra function tem uma variável
//  "arguments" que sustenta todos os argumentos

function funcao() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

function funcao(a = 0, b = 0, c = 0) {
  console.log(a + b);
}
funcao(2, 4);

function funcao2({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao2({ nome: "Alexandre", sobrenome: "Retamero", idade: 30 });

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
}
conta("+", 1, 20, 30, 40, 50);
