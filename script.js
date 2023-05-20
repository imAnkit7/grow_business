function changeBg() {
    let navbar = document.getElementById('header');
    let scrollValue = window.scrollY;
    if (scrollValue < 150) {
        navbar.classList.remove('scrolled')
    } else {
        navbar.classList.add('scrolled')
    }
}

window.addEventListener('scroll', changeBg)

const bar = document.getElementsByClassName('bar')[0];
function tooglebar() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active')
}


bar.addEventListener('click', tooglebar)
