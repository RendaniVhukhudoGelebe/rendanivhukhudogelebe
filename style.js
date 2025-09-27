// Smooth scroll back to top when clicking the logo
document.querySelector('.logo-link').addEventListener('click', function(e) {
  e.preventDefault();               // prevent jump
  window.scrollTo({
    top: 0,
    behavior: 'smooth'              // smooth scrolling
  });
});