const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

// Обработчик клика по иконке меню
menuIcon.addEventListener('click', () => {
    // Переключаем класс 'open' для показа/скрытия меню
    navMenu.classList.toggle('open');
});
