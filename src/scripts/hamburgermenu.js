const initmenuclick = () => {
    const button = document.querySelector('.hamburgermenubutton');
    const menu = document.querySelector('.hamburgermenu');
    button.addEventListener('pointerdown', () => {
        button.classList.toggle('open');
        menu.style.display = button.classList.contains('open') ? 'flex' : 'none';
        console.log('clicked menu button');
    });
}
initmenuclick();