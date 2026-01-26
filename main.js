
const formNumbers = document.getElementById('form-numbers');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');
const resetButton = document.getElementById('reset-button');

formNumbers.addEventListener('submit', function(e) {
    e.preventDefault();

    // Converter para números para evitar bugs
    const numA = parseFloat(document.getElementById('number-a').value);
    const numB = parseFloat(document.getElementById('number-b').value);

    // Limpar mensagens anteriores
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Validações
    // Validação para garantir que o campo não esteja vazio ou tenha algum valor não númérico
    // Segunda camada de proteção
    if (isNaN(numA) || isNaN(numB)) {
        errorMessage.querySelector('.text').textContent = 'Por favor, insira números válidos em ambos os campos.';
        errorMessage.style.display = 'flex';
        successMessage.style.display = 'none';
    } else if (numB > numA) { // Validação do Valor do campo B seja maior que o valor do camp A
        successMessage.querySelector('.text').textContent = `Sucesso! B (${numB}) é MAIOR que A (${numA}).`;
        successMessage.style.display = 'flex';
        errorMessage.style.display = 'none';
        resetButton.style.display = 'block';
    } else { // Se o valor de A for maior que B
        errorMessage.querySelector('.text').textContent = `Erro: O valor em B deve ser MAIOR que A (${numA}). Tente novamente!`;
        errorMessage.style.display = 'flex';
        successMessage.style.display = 'none';
        resetButton.style.display = 'block';
    }
});

//Botão para 'resetar' o formulário - type 'reset' no HTML e no JS esconte as mensagens e botão
resetButton.addEventListener('click', function() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    resetButton.style.display = 'none';
})