let hamburger = document.querySelector('.hamburger')
let navItems = document.querySelector('#navItems')
let navLink = document.querySelectorAll('.nav-link')
let slides = document.querySelectorAll('.slides')
let dots = document.querySelectorAll('.dots');
let currentSlide = 0;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
})

navLink.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
}))

dots.forEach((bullet , bulletIndex)=>{
    bullet.addEventListener('click',()=>{
        if (currentSlide != bulletIndex){
            changeSlide(bulletIndex);
            resetTimer();
        }
    })
})

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {
        moveTo = 0;
    }
    if (moveTo < 0) {
        moveTo = slides.length - 1;
    }
    slides[currentSlide].classList.toggle('active');
    dots[currentSlide].classList.toggle('active');
    slides[moveTo].classList.toggle('active');
    dots[moveTo].classList.toggle('active');
    currentSlide = moveTo;
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 7000);
}

// setInterval(autoPlay,7000)
let timer = setInterval(autoPlay, 4000);

function autoPlay() {
    changeSlide(currentSlide + 1);
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click',()=>{
    changeSlide(currentSlide - 1);
    resetTimer();
})
next.addEventListener('click',()=>{
    changeSlide(currentSlide + 1);
    resetTimer();
})

// Exctract date from fields
// const checkin = document.querySelector('#check-in').value;
// const checkout = document.querySelector('#check-out').value;
const booked = document.querySelector('#booked-btn');
const display = document.querySelector('.display');
const status1 = document.querySelector('#status');
booked.addEventListener('click', () => {
    const checkin = document.querySelector('#check-in').value;
    const checkout = document.querySelector('#check-out').value;
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    function diff(a,b){
        return (b-a)/(1000*60*60*24);
    }
    if (checkin == "" && checkout == "") {
        status1.innerHTML = "Please enter check-in and check-out dates.";
        // display.style.display="block";
        display.style.background = "red";
        booked.innerHTML = "BOOK NOW";
        booked.classList.remove('active');
    }
    else if (checkin === "") {
        // console.log('enter checkin date');
        status1.innerHTML = "Please enter check-in date.";
        display.style.background = "red";
        booked.innerHTML = "BOOK NOW";
        booked.classList.remove('active');
    }
    else if (checkout === "") {
        // console.log('enter checkout date');
        status1.innerHTML = "Please enter check-out date.";
        display.style.background = "red";
        booked.innerHTML = "BOOK NOW";
        booked.classList.remove('active');
    }
    else if (checkin >
        checkout) {
        // console.log('please enter correct details');
        status1.innerHTML = "Please re-check your check-in and check-out dates.";
        display.style.background = "red";
        booked.innerHTML = "BOOK NOW";
        booked.classList.remove('active');
    }
    else if (checkin === checkout) {
        status1.innerHTML = (`Your room successfully booked for ${checkin}.`);
        display.style.background = "green";
        booked.innerHTML = "BOOKED SUCCESSFULLY";
        booked.classList.add('active');
    }
    else if (checkin != "" && checkout != "") {
        status1.innerHTML = (`Your room successfully booked for ${diff(d1,d2)}days from ${checkin} to ${checkout}.`);
        display.style.background = "green";
        booked.innerHTML = "BOOKED SUCCESSFULLY";
        booked.classList.add('active');
    }

})
