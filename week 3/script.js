const animatedItems = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

animatedItems.forEach(item => observer.observe(item));
