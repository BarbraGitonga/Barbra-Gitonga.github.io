/*==================== SHOW MENU ====================*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====== SCROLL SECTIONS ACTIVE LINK ======*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*====== SHOW SCROLL UP ======*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //When the scroll is higher the 560 viewpiont height
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*====== TYPED ANIMATION ======*/
var typed = new Typed('.animation', {
    strings:['an Engineer', 'a ML Enthusiast', 'a CAD Designer'],
    typeSpeed:70,
    BackSpeed:60,
    loop:true
})
/*====== MIXITUP FILTER PORTFOLIO  ====== */
const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 300
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio_item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l=> l.classList.remove('active_portfolio'))
        this.classList.add('active_portfolio')
    }
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))
