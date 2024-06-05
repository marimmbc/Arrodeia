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


// Função para abrir um pop-up
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

// Função para fechar um pop-up
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Inicializando a classe ButtonManager quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ButtonManager();
    
    // Exibir o pop-up de localização primeiro
    openPopup('popup-location');
    
    // Exibir o pop-up de boas-vindas após 5 segundos
    setTimeout(() => {
        openPopup('popup-welcome');
    }, 5000);
});
