/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById("nav-close");
const darkMoode = document.getElementById("dark-logh");

let calc = 0;
if (navToggle) {
    navToggle.addEventListener('click', () => {
        if (calc == 0) {
            navMenu.classList.add('show-menu');
            navClose.style.display = "block";
            navToggle.style.display = "none";
            darkMoode.style.display = "none";
            calc = 1;
        } else {
            navMenu.classList.remove('show-menu');
            calc = 0;
        }
    });
}

navClose.addEventListener("click", () =>{
    navClose.style.display = "none";
    navToggle.style.display = "block";
    navMenu.classList.remove('show-menu');
    darkMoode.style.display = "block";
    calc = 0
})


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
};
navLinks.forEach(navLink => navLink.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    scrollUp.classList.toggle('show-scroll', window.scrollY >= 350);
};
window.addEventListener('scroll', scrollUp);



let index = 1;
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    const body = document.body;
    const headings = document.querySelectorAll('h1, h2, h3');
    const paragraphs = document.querySelectorAll('p');
    const links = document.querySelectorAll('a');
    const footer = document.querySelector('footer');
    const exploreShadow = document.querySelector('.explore__shadow');
    const homeShadow = document.querySelector('.home__shadow');

    body.classList.toggle('dark');
    body.style.backgroundColor = index === 0 ? 'black' : 'white';

    headings.forEach(heading => {
        try {
            heading.style.color = index === 0 ? 'white' : 'black';
        } catch (error) {
            console.error("Error setting heading color:", error);
        }
    });

    paragraphs.forEach(paragraph => {
        try {
            paragraph.style.color = index === 0 ? 'white' : 'black';
        } catch (error) {
            console.error("Error setting paragraph color:", error);
        }
    });

    links.forEach(link => {
        try {
            link.style.color = index === 0 ? 'white' : 'black';
        } catch (error) {
            console.error("Error setting link color:", error);
        }
    });

    try {
        footer.style.backgroundColor = index === 0 ? 'var(--container-color)' : '#C3C3C3';
    } catch (error) {
        console.error("Error setting footer background color:", error);
    }

    try {
        exploreShadow.style.background = index === 0 ? 'linear-gradient(180deg, hsl(0, 0%, 0%) 5%, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 0) 60%, hsl(0, 0%, 0%) 92%)' : 'linear-gradient(180deg, hsl(0, 0%, 100%) 5%, hsla(0, 0%, 100%, 0) 40%, hsla(0, 0%, 100%, 0) 60%, hsl(0, 0%, 100%) 92%)';
    } catch (error) {
        console.error("Error setting explore shadow background:", error);
    }

    index = index === 1 ? 0 : 1;
});




/*=============== FEEDBACK =====*/
let feedbackNum = 0;

function user(num) {
    let feedbackBoxes = document.getElementsByClassName("feedback__bottom-container");
    let active = document.getElementsByClassName("feedback__active");

    for (let i = 0; i < feedbackBoxes.length; i++) {
        feedbackBoxes[i].style.display = "none";
        active[i].style.backgroundColor = "#787878";
    }

    if (num !== undefined) {
        feedbackBoxes[num - 1].style.display = "block";
        active[num - 1].style.backgroundColor = "#434343";
    } else {
        feedbackBoxes[feedbackNum - 1].style.display = "block";
        active[feedbackNum - 1].style.backgroundColor = "#434343";
    }
}

user();

    /*=========== MODAL ===========*/

  let indexM = 1;

function toggleModal() {
    const modal = document.getElementById('modal');
    const computedStyle = window.getComputedStyle(modal);
    const modal_background = document.getElementById("modalBackground");

    if (computedStyle.display === "none") {
        modal.style.display = "flex";
        modal_background.style.display = "flex"
    } else {
        modal.style.display = "none";
        modal_background.style.display = "none"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;

    function showSlide(n) {
        const slides = document.querySelectorAll('.slide');
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }
        slides.forEach(slide => slide.style.display = 'none');
        slides[slideIndex].style.display = 'block';
    }

    function moveSlide(n) {
        showSlide(slideIndex += n);
    }

    showSlide(slideIndex);
});
