let num = Number(prompt('Digite um número: '));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML = `Seu número é ${num}`

texto.innerHTML = ""
texto.innerHTML += `<p>Raiz quadrada: <strong>${num ** (1/2)}</strong><br /></p>`
texto.innerHTML += `<p><strong>${num}</strong> é inteiro: <strong>${Number.isInteger(num)}</strong></p>`
texto.innerHTML += `<p>É NaN: <strong>${isNaN(num)}</strong><br /></p>`
texto.innerHTML += `<p>Arredondando para baixo <strong>${Math.floor(num)}</strong><br /></p>`
texto.innerHTML += `<p>Arredondando para cima <strong>${Math.ceil(num)}</strong><br /></p>`
texto.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}</strong><br /></p>`