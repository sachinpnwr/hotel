let hamburger = document.querySelector('.hamburger')
let navItems = document.querySelector('#navItems')
let navLink = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
})

navLink.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
}))