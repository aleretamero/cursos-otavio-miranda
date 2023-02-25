//http://developer.mozilla.org/ptBR/docs/Web/JavaScript/Reference/Global_Objects/Date
//Quando usar new antes da função, significa que é uma função construtora
// a, m, d, h, m, s, ms

const data = new Date(); // 01/01/1970 → marco 0
console.log(data.toString())

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hor', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado