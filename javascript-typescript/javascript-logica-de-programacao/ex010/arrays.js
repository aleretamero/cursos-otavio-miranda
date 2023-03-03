// atribuição via desestruturação (arrays)
// ... rest   ... spread

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);
