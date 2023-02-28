let hamburger = document.querySelector('.hamburger')
let navItems = document.querySelector('#navItems')
let navLink = document.querySelectorAll('.nav-link')
let slides = document.querySelectorAll('.slides')
let currentSlide = 0;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
})

navLink.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
}))

function changeSlide(moveTo){
    if (moveTo >= slides.length){
        moveTo = 0;
    }
    if (moveTo < 0 ){
        moveTo = slides.length-1;
    }
    slides[currentSlide].classList.toggle('active');
    slides[moveTo].classList.toggle('active');
    currentSlide = moveTo;
}

window.onload = setInterval(()=>{
    changeSlide(currentSlide+1);
},3000)
