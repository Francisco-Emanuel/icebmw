const navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.menu-links');
    let navLinks = document.querySelectorAll('.menu-links a')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }else [
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 }s`
            ]
        });
        burger.classList.toggle('toggle')
    });
    
}

navSlide();