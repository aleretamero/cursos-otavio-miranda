/**
 * Primitivos (imútaveis) → valores Copiados
 * string, number, bollean, undefined, null (bigint, symbol)
 * 
 * Referencia (mutável) → passados por referência
 * array, object, function
 */

// OBS para copiar um objeto mutavel pode usar esse exemplo: let b = [...a]; let b = {...a};

let a = [1, 2, 3];
let b = a;          //valores passados por referência
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

//let a = 'A';
//let b = a;      //Valores Copiados
//console.log(a, b);
//a = 'Outra coisa';
//console.log(a, b);