function maiorNumero(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

const max = (x, y) => x > y ? x : y; 

let resultado = max(5, 6)
console.log(resultado)