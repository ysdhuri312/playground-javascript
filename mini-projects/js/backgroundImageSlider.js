/** @format */

const images = document.querySelectorAll('.image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

// function showNextImage() {
//   images[index].classList.remove('active');
//   index = (index + 1) % images.length;

//   images[index].classList.add('active');
// }

// setInterval(showNextImage, 2000);

function showSlide(newIndex) {
  images[index].classList.remove('active');
  index = (newIndex + images.length) % images.length; // wrap around
  images[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
});
