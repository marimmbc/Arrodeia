// scripts.js
class MapApp {
    constructor(mapElementId, searchInputId, suggestionsId) {
        this.mapElement = document.getElementById(mapElementId);
        this.searchInput = document.getElementById(searchInputId);
        this.suggestionsElement = document.getElementById(suggestionsId);
        this.map = null;
        this.initMap();
        this.addEventListeners();
    }

    initMap() {
        this.map = new google.maps.Map(this.mapElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }

    addEventListeners() {
        this.searchInput.addEventListener('input', () => this.onSearch());
    }

    onSearch() {
        const query = this.searchInput.value.toLowerCase();
        const suggestions = this.suggestionsElement.querySelectorAll('.suggestion');
        
        suggestions.forEach(suggestion => {
            const title = suggestion.querySelector('.title').textContent.toLowerCase();
            const location = suggestion.querySelector('.location').textContent.toLowerCase();
            
            if (title.includes(query) || location.includes(query)) {
                suggestion.style.display = 'flex';
            } else {
                suggestion.style.display = 'none';
            }
        });
    }
}

function initMap() {
    new MapApp('map', 'search-input', 'suggestions');
}
