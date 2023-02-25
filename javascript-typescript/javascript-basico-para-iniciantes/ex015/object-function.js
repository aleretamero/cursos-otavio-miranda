//function criarPessoa (nome, sobrenome, idade) {
//    return {nome, sobrenome, idade};
//}
//const pessoa1 = criarPessoa('Luiz', 'Miranda', 25)
//console.log(pessoa1.nome)

const pessoa = {
    nome: 'Aline',
    sobrenome: 'Souza',
    idade: 24,

    fala() {
        console.log(`A minha idade é ${this.idade} anos`);
    },

    incrementaIdade() {
        ++this.idade;
    },
}

pessoa.incrementaIdade()
pessoa.fala()