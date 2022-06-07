//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
//Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos } anos de idade.`;
}

const pessoa = {
    nome: "Carlos",
    idade: 28,
};
const pessoa1 = {
    nome: "Sabrina",
    idade: 32,
};

const animal = {
    nome: "Susy",
    idade: 4,
    raca: "pug",
};

console.log(calculaIdade.call(pessoa1,10));
console.log(calculaIdade.apply(pessoa1,[23]));