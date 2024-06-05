class Modal {
    constructor(modalId, triggerSelector, closeSelector) {
        this.modal = document.getElementById(modalId);
        this.trigger = document.querySelector(triggerSelector);
        this.closeButton = document.querySelector(closeSelector);

        this.initialize();
    }

    initialize() {
        this.trigger.addEventListener('click', () => this.open());
        this.closeButton.addEventListener('click', () => this.close());
        window.addEventListener('click', (event) => this.outsideClick(event));
    }

    open() {
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }

    outsideClick(event) {
        if (event.target == this.modal) {
            this.close();
        }
    }
}

// Uso
const instructionsModal = new Modal('modal', '.btn-instructions', '.close');
