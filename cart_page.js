
document.querySelectorAll('.close_button').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.cart_product').style.display = 'none';
    });
});