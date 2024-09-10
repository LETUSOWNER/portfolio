// Select the navbar
const navbar = document.getElementById('navbar');

// Function to add or remove 'shrink' class based on scroll position
window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
};
