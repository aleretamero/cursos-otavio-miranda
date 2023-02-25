//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']

// Altera os dados do indíce dentro do []
alunos[0] = 'Eduardo';

// Caso não tenha o índice ele será adicionado
alunos[3] = 'Luiza';

// Cria um índice no final e adiciona um dado nesse 
alunos[alunos.length] = 'Luana' ; 

// Cria um índice no final e adiciona um dado nesse índice
alunos.push('Fábio');

// Cria um índice no começo, adiciona um dado na primeira posição e descola os demais índices
alunos.unshift('Rafaela');              

// Ordena os dados
alunos.sort();                          

// Apaga o último índice, OBS pode adiocionar o dado removido em uma variável
let ultimoRemovido = alunos.pop();      

// Apaga o primeiro índice e desloca os demais índices para esquerda, OBS pode adiocionar o dado removido em uma variável  
let primeiroRemovido = alunos.shift();  

// Deleta o dado do ídice selecionado, porém não deleta o índice 
delete alunos[2]                        


console.log(alunos)
console.log(`Possui ${alunos.length} aluno(s)`)
console.log(`Os alunos removidos foram ${primeiroRemovido} e ${ultimoRemovido}`)