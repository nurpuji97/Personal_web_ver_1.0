// burger menu
const btnBurger = document.querySelector('.Burger_menu');
const ListMenu = document.querySelector('.nav__menu');

btnBurger.addEventListener('click', ()=>{
    ListMenu.classList.toggle('active')
});

// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    cssMode: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    400: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    },
});