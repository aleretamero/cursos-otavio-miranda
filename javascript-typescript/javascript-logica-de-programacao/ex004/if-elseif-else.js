/* 
entre  0 - 11 - Bom dia 
entre 12 - 17 - Boa tarde
entre 18 - 18 - Boa noite 
*/

// if pode ser usado sozinho
// para usar "else" ou "else if" precisa ter um "if"
// só pode ter um "if" e um "else"
// pode ter vários "else if"

const hora = 17;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Bom tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Bom noite');
} else {
    console.log('Hello, world!');
}