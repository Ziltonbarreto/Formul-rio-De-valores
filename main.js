function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    const mensagem = document.getElementById('mensagem');
    const submitButton = document.getElementById('submitButton');

    // Verifica se B é maior que A
    if (numeroB > numeroA) {
        alert('O formulário é válido! B é maior que A.');
        mensagem.textContent = ''; // Limpa a mensagem de erro
        submitButton.disabled = false; // Habilita o botão
    } else {
        mensagem.textContent = 'O formulário é inválido! B deve ser maior que A.';
        submitButton.disabled = true; // Desabilita o botão
    }
}

// Função para habilitar o botão ao alterar os valores
function verificarValores() {
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    const submitButton = document.getElementById('submitButton');
    const mensagem = document.getElementById('mensagem');

    if (numeroB > numeroA) {
        submitButton.disabled = false; // Habilita o botão
        mensagem.textContent = ''; // Limpa a mensagem de erro
    } else {
        submitButton.disabled = true; // Desabilita o botão
        mensagem.textContent = 'O formulário é inválido! B deve ser maior que A.';
    }
}

document.getElementById('meuFormulario').addEventListener('submit', validarFormulario);
document.getElementById('numeroA').addEventListener('input', verificarValores);
document.getElementById('numeroB').addEventListener('input', verificarValores);
