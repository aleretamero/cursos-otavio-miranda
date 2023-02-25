/**
 * OBS: Para utilizar "" dentro de "" pode colocar uma barra invertida na aspa interna 
 */

//               01234567
let umaString = "Um texto"

console.log(umaString[4])                     // retorna "e"
console.log(umaString.charAt(6))              // retorna "t"
console.log(umaString.concat(' 2'))           // cancatena o texto
console.log(umaString.indexOf('texto'))       // retorna o índice "3" se não encontrar retorna -1
console.log(umaString.lastIndexOf('texto'))   // retorna "3" também, porém procura de trás para frente 
console.log(umaString.replace('Um', 'Outro')) // troca a palavra 'Um' por 'Outro'
console.log(umaString.length)                 // retorna a quantidade de caracteres no texto
console.log(umaString.toLocaleUpperCase())    // retorna texto em maiúsculo
console.log(umaString.toLocaleLowerCase())    // retorna texto em minúsculo
console.log(umaString.slice(-3))              // retorna "xto"
console.log(umaString.slice(3, -1))           // retorna "text"
console.log(umaString.split('t'))             // retorna "[ 'Um ', 'ex', 'o' ]"

//expressão regular
console.log(umaString.search(/[a-z]/g))   // retorna 1
console.log(umaString.match(/[a-z]/g))    // retorna [ 'm', 't', 'e', 'x', 't', 'o' ]
umaString = 'O rato roeu a roupa do rei de roma'
console.log(umaString.replace(/r/g, '#')) // retorna "O #ato #oeu a #oupa do #ei de #oma"