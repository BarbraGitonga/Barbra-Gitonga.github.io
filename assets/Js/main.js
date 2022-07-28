/* Header background on scroll */
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
})
/* Navigation menu */
let menu = document.querySelector(".menu_icon");

menu.onclick = () => {
    menu.classList.toggle("move");
};

/* Typed Animation */
var typed = new Typed('.animation', {
    strings:['an Engineer', 'a Full-stack Developer', 'a Designer'],
    typeSpeed:70,
    BackSpeed:60,
    loop:true
})