const init = () => {
    const button = document.querySelector('.hamburgermenubutton');
    const menu = document.querySelector('.hamburgermenu');
    button.addEventListener('click', () => {
        button.classList.toggle('open');
        menu.style.visibility = button.classList.contains('open') ? 'visible' : 'hidden';
    });
}