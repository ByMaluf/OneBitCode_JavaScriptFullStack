// Função para coletar dados com validação
function promptWithValidation(message, errorMessage) {
  let userInput;
  do {
    userInput = window.prompt(message);
    if (userInput === null || userInput === '') {
      alert(errorMessage);
    }
  } while (userInput === null || userInput === '');
  return userInput;
}

// Função principal para executar o código
function main() {
  alert('Exercício Nº 1');

  let firstName = promptWithValidation('Informe o primeiro nome:', 'O nome é obrigatório!');
  let lastName = promptWithValidation('Informe o sobrenome:', 'O sobrenome é obrigatório!');
  let currentStudent = promptWithValidation('Informe o campo de estudo:', 'O campo de estudo é obrigatório!');
  let dateOfBirth = promptWithValidation('Informe o ano de nascimento:', 'O ano é obrigatório!');
  const currentYear = new Date().getFullYear();
  let age = currentYear - parseInt(dateOfBirth);

  // Exibir resultados
  alert(`\r\n Nome Completo: ${firstName} ${lastName}
        \r\n Campo de Estudo: ${currentStudent}
        \r\n Idade: ${age}`);
}

main();
