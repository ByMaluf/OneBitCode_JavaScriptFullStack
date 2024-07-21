alert('Exercício Nº 2')

const primeiroNumero = prompt('Informe o primeiro numero');
const segundoNumero = prompt('Informe o segundo numero');

alert(`
Números calculados: 1º(${primeiroNumero})  2º(${segundoNumero}) \n
Adição: ${parseFloat(primeiroNumero) + parseFloat(segundoNumero)} \n
Subtração: ${primeiroNumero - segundoNumero} \n
Multiplicação: ${primeiroNumero * segundoNumero} \n
Divisão: ${primeiroNumero / segundoNumero} 
`);
