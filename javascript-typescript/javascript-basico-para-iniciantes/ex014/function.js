const raiz = n => n ** 0.5;

function saudacao() {
    console.log('Hello, wold!')
}

function parOuImpar(num) {
    if(num % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

console.log(raiz(25))
saudacao()
console.log(`${parOuImpar(4)}`)