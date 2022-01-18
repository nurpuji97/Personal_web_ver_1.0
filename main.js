const btnBurger = document.querySelector('.Burger_menu');
const ListMenu = document.querySelector('.nav__menu');

btnBurger.addEventListener('click', ()=>{
    ListMenu.classList.toggle('active')
});
