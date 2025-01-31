// var typed = new typed(".text", {
//     Strings:[ "Frontend Developer", "Web Developer", "Programmer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop:true
// });
// toggle icon nav
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // Adjust selector to match your HTML

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and nav when click nav link (scroll)
    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact-form', {origin:
'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});