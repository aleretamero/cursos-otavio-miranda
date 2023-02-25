// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUruario = 1000;
const nivelUsuario = pontuacaoUruario >= 1000 ? 'Usuário VIP' : 'Usuário normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)
