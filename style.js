// Define variables for elements we want to manipulate
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle-btn');
const callToActionBtn = document.querySelector('.call-to-action button');
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Function to toggle the navigation menu
function toggleMenu() {
  nav.classList.toggle('active');
}

// Event listener for toggle button
toggleBtn.addEventListener('click', toggleMenu);

// Function to change the header background color when scrolling
function changeHeaderBackground() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

const texts = ['Empower social causes', 'Enable transparent transactions', 'Create a fairer world'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);

}());



const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
  const percentage = progressBar.dataset.percent;
  const fill = progressBar.querySelector('.fill');
  fill.style.width = `${percentage}%`;
});



const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const caption = modal.querySelector('figcaption');

images.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    caption.textContent = image.alt;
    modal.classList.add('open');
  });
});

modal.addEventListener('click', () => {
  modal.classList.remove('open');
});




const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 100,
    behavior: "smooth"
  });
}




const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = slideIndex;
  }

  for (const slide of slides) {
    slide.classList.remove('active');
  }

  slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);
