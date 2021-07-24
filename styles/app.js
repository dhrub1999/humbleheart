// variable

const hamContainer = document.querySelector('.mobile-hamburger');
const navItems = document.querySelector('.nav-items');

hamContainer.addEventListener('click', ()=>{
    hamContainer.classList.toggle('clicked');
    navItems.classList.toggle('show');
})