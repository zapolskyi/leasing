const navToggle = document.querySelector ('.navToggle');
const nav = document.querySelector ('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})


const swiper = new Swiper(".swiper", {
    effect: "fade",

    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        
    },
});