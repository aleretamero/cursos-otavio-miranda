const nome = 'Alexandre';
const sobreNome = 'Retamero';
const idade = 30

const peso = 84;
const altura = 180;
const alturaEmMetros = altura / 100;
const indiceMassaCorporal = peso / (alturaEmMetros ** 2)

let agora = new Date()
let anoAtual = agora.getFullYear()
const anoNascimento = anoAtual - idade


console.log(`${nome} ${sobreNome} tem ${idade} anos, nascido em ${anoNascimento} `)
console.log(`pesa ${peso}Kg tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`)