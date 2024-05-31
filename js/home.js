// Add any required JavaScript functionality here. For example:
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Button clicked: ' + this.textContent);
    });
});
