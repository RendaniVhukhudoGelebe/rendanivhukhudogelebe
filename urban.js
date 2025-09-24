/ Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lightbox for portfolio images
const lightbox = document.getElementById('lightbox');

document.querySelectorAll('.portfolio-img').forEach(img => {
  img.addEventListener('click', () => {
    while (lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
    const imgLarge = document.createElement('img');
    imgLarge.src = img.src;
    lightbox.appendChild(imgLarge);
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Animated counters (simple)
const counters = document.querySelectorAll('.counter');
if (counters.length) {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace(/,/g,'') || 0;
      const increment = Math.ceil(target / 200);
      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(update, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    update();
  });
}