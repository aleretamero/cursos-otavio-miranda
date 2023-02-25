/*
 Operadores aritméticos
 +  → Adição / Concatenção
 -  → Subtração
 /  → Divisão
 *  → Multiplicação 
 ** → Potenciação
 %  → Resto da divisão

 Ordem de procedência
 ()
 **
 * / %
 + -

 Operadores de incremento
 x = x + 1 → Incremento +1
 x = x - 1 → Decremento -1
 x += 1    → Incremento +1
 x -= 1    → Decremento -1
 x ++      → Incremento +1
 x --      → Decremento -1
*/

 const num1 = parseFloat(5.5);
 const num2 = parseInt(2);
 const num3 = Number(10);
 console.log((num1 + num2) * num3);

 /**
  * Converter dados para tipo number
  * Number()     → número inteiro/decimal
  * parseInt()   → número inteiro
  * parseFloat() → número decimal
  */