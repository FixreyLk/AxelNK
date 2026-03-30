// // Находим все основные ссылки
// const navLinks = document.querySelectorAll('.nav-main-menu > li > a');
// const m1 = document.querySelector('#menu1');
// const m2 = document.querySelector('#menu2');
// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.nav-main-menu');
// const menuToggle = document.querySelector('#mobile-menu');
// const sideMenu = document.querySelector('#side-menu');
// const overlay = document.querySelector('#overlay');
// const navmobLinks = document.querySelectorAll('.nav-main-menu a');
// const links = sideMenu.querySelectorAll('a');
const sml = document.querySelectorAll('.submenu');
const dd = document.querySelectorAll('.dropdown');
// Находим все ссылки внутри выпадающих списков
const dropdowns = document.querySelectorAll('.dropdown > a');

dropdowns.forEach(link => {
    link.addEventListener('click', function(e) {
        // Если экран меньше 1000px (мобильная версия)
        if (window.innerWidth <= 1000) {
            e.preventDefault(); // Отменяем переход по ссылке #
            
            const parent = this.parentElement; // Это наш li.dropdown

            // Закрыть другие открытые вкладки (эффект настоящей гармошки)
            document.querySelectorAll('.dropdown').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('open');
                }
            });

            // Переключаем класс .open у того, на который нажали
            parent.classList.toggle('open');
        }
    });
});




// navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         console.log("Клик по разделу: " + this.innerText);
//     });
// });


// menu.onclick = function() {
//     // Переключаем класс 'active' у меню
//     menuLinks.classList.toggle('active');
    
//     // По желанию: анимация самого бургера (превращение в крестик)
//     menu.classList.toggle('is-active');
// };


// // Функция открытия/закрытия
// function toggleMenu() {
//     sideMenu.classList.toggle('active');
//     overlay.classList.toggle('active');
// }

// menuToggle.onclick = toggleMenu;

// // Закрывать меню, если кликнули по пустому месту (оверлею)
// overlay.onclick = toggleMenu;

// // Закрывать меню после нажатия на любую ссылку
// navLinks.forEach(link => {
//     link.onclick = toggleMenu;
// });
// function toggleMenu() {
//     // Проверяем, найдены ли элементы, прежде чем что-то с ними делать
//     if (sideMenu && overlay) {
//         sideMenu.classList.toggle('active');
//         overlay.classList.toggle('active');
//     } else {
//         console.error("Ошибка: Элементы меню или оверлея не найдены в HTML!");
//     }
// }
// // Функция для настройки мобильного меню
// function setupMobileMenu() {

//     // Проверяем, существуют ли элементы на этой странице и ширина ли меньше 1000px
//     if (menuToggle && sideMenu && overlay && window.innerWidth <= 1000) {
        
//         // Удаляем старые события, чтобы они не дублировались
//         menuToggle.onclick = null;
//         overlay.onclick = null;

//         // Назначаем открытие/закрытие
//         menuToggle.onclick = function() {
//             sideMenu.classList.toggle('active');
//             overlay.classList.toggle('active');
//         };

//         overlay.onclick = function() {
//             sideMenu.classList.remove('active');
//             overlay.classList.remove('active');
//             menuToggle.classList.toggle('is-active');
//         };

//         // Закрытие при клике на ссылки
        
//         links.forEach(link => {
//             link.onclick = () => {
//                 sideMenu.classList.remove('active');
//                 overlay.classList.remove('active');
//             };
//         });
        
//         console.log("Мобильное меню активировано (экран < 1000px)");
//     } else {
//         // Если экран большой, убеждаемся, что меню скрыто
//         if (sideMenu) sideMenu.classList.remove('active');
//         if (overlay) overlay.classList.remove('active');
//     }
// }
// function mp (){
//  if (menuToggle && sideMenu && overlay && window.innerWidth <= 950) {
// m2.add('active');
// m1.remove('active');
//  }else{
//     m1.add('active');
//     m2.remove('active');
//  }
// }
// // Запускаем при загрузке страницы
// window.addEventListener('DOMContentLoaded', setupMobileMenu);

// // Запускаем при изменении размера окна (чтобы срабатывало сразу при сужении)
// window.addEventListener('resize', setupMobileMenu);