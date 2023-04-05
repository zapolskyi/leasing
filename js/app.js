const navToggle = document.querySelector ('.navToggle');
const nav = document.querySelector ('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})


let header = document.querySelector ('header');

window.addEventListener('scroll', function() {
    let showMeScroll = scrollY;

    if (showMeScroll > 765) {
        header.classList.add ('shadow');
    } else {
        header.classList.remove ('shadow')
    }

    console.log (showMeScroll);
})

console.log (header);

const swiper = new Swiper(".swiper", {
    effect: "fade",

    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        
    },
});
