 let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills-container,.skills-boxs', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content,.head, .about-info ', { origin: 'left' });

const typed = new Typed('.multiple-text', { 
    strings: ['Frontend Developer !!', 'Python Developer !!', 'Prompt Engineer !!','Tech Enthusiast !!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// document.addEventListener('DOMContentLoaded', function () {
//     // Select the form and add a submit event listener
//     const form = document.querySelector('section.contact form');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission
        
//         // Collect form data
//         const formData = {
//             name: form.querySelector('input[name="name"]').value,
//             email: form.querySelector('input[name="email"]').value,
//             mobile: form.querySelector('input[name="mobile"]').value,
//             subject: form.querySelector('input[name="subject"]').value,
//             message: form.querySelector('textarea[name="message"]').value
//         };

//         // Send form data using EmailJS
//         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
//             .then(function(response) {
//                 alert('Message sent successfully!'); // Show a success message
//                 form.reset(); // Reset the form fields
//             }, function(error) {
//                 alert('Failed to send the message. Please try again later.'); // Show an error message
//             });
//     });
// });

