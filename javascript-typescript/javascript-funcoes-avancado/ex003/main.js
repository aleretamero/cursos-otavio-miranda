// return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2));

//

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criaPessoa("Alexandre", "Retamero");
console.log(p1);

//

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + "" + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
