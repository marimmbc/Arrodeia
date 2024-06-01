// Definindo uma classe para gerenciar interações de botões
class ButtonManager {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (event) => this.handleButtonClick(event));
        });
    }

    handleButtonClick(event) {
        const buttonText = event.target.textContent;
        this.showAlert(buttonText);
    }

    showAlert(message) {
        alert('Button clicked: ' + message);
    }
}

// Inicializando a classe ButtonManager quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ButtonManager();
});
