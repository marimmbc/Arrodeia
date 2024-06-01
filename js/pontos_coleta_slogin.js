// Definindo uma classe para gerenciar sugestões de pontos de coleta
class SuggestionsManager {
    constructor() {
        this.suggestions = document.querySelectorAll('.suggestions li');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.suggestions.forEach(suggestion => {
            suggestion.addEventListener('click', () => this.handleSuggestionClick(suggestion));
        });
    }

    handleSuggestionClick(suggestion) {
        const title = suggestion.querySelector('.location-title').textContent;
        const detail = suggestion.querySelector('.location-detail').textContent;
        this.showLocationInfo(title, detail);
    }

    showLocationInfo(title, detail) {
        alert(`Location clicked:\n${title}\n${detail}`);
    }
}

// Inicializando a classe SuggestionsManager quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new SuggestionsManager();
});
