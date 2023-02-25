//pode utilizar "var", "let" ou "const", geralmente não se utiliza var

let nome;
nome = 'Qualquer nome';

const nascimento = 1984

console.log(`${nome} nasceu em ${nascimento}.`);
console.log(`Em 2000 ${nome} conheceu a Maria`);
console.log(`${nome} casou-se com Maria em 2012.`);
console.log(`Maria teve 1 filho com ${nome} em 2015`);
console.log(`O filho de ${nome} se chama Eduardo`);

// Para descobrir o tipo da variável utilizae typeof()
console.log(typeof(nome))
console.log(typeof(nascimento))

/**
 * Não criar variáveis com palavras reservadas.
 * Variáveis precisam ter nomes significativos.
 * Pode começar com letra, $ ou _
 * Não pode começar uma variável com números.
 * Pode conter letras e números
 * Pode usar acentos e símbolos (não recomendado)
 * Não pode conter espaços ou traços.
 * Utilizar camelCase //Exemplo: nomeCompletoDoCliente.
 * Case-sensitive.
 * Pode redeclarar variáveis com VAR, e pode alterar o valor dela.
 * Não pode redeclarar variáveis com LET, mas pode alterar o valor dela.
 * Não pode redeclarar variáveis com CONST, e não pode alterar o valor dela.
 * 
 * Não utilizar VAR, utilizar LET ou CONST
 * 
 * OBS: Não criar variáver sem LET ou CONST
 */