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

window.onload = setInterval(() => {
    changeSlide(currentSlide + 1);
}, 7000)

// Exctract date from fields
const checkin = document.querySelector('#check-in').value;
const checkout = document.querySelector('#check-out').value;
const booked = document.querySelector('#booked-btn');
const display = document.querySelector('.display');
booked.addEventListener('click', () => {
    const checkin = document.querySelector('#check-in').value;
    const checkout = document.querySelector('#check-out').value;
    if (checkin == "" && checkout == "") {
        display.innerHTML = "Please enter check-in and check-out dates.";
        display.style.background = "red";
    }
    else if (checkin === "") {
        // console.log('enter checkin date');
        display.innerHTML = "Please enter check-in date.";
        display.style.background = "red";
    }
    else if (checkout === "") {
        // console.log('enter checkout date');
        display.innerHTML = "Please enter check-out date.";
        display.style.background = "red";
    }
    else if (checkin >
        checkout) {
        // console.log('please enter correct details');
        display.innerHTML = "Please re-check your check-in and check-out dates.";
        display.style.background = "red";
    }
    else if (checkin === checkout) {
        display.innerHTML = (`Your room successfully booked for ${checkin}.`);
        display.style.background = "green";
        booked.innerHTML = "BOOKED SUCCESSFULLY";
        booked.classList.add('active');
    }
    else if (checkin != "" && checkout != "") {
        display.innerHTML = (`Your room successfully booked from ${checkin} to ${checkout}.`);
        display.style.background = "green";
        booked.innerHTML = "BOOKED SUCCESSFULLY";
        booked.classList.add('active');
    }

})
