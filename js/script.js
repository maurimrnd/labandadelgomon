const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window.scrollY > 80);
});

//abro menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
};

const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration: 2500,
    reset: false
});
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:600});
sr.reveal('.cobo',{delay:300});
sr.reveal('.brc',{delay:300});
sr.reveal('.egresado',{delay:300});
sr.reveal('.cool',{delay:300});
sr.reveal('.sancle',{delay:300});
