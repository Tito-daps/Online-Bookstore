document.addEventListener('DOMContentLoaded', () => {

  
  const faqQuestions = document.querySelectorAll('.question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const isActive = q.classList.contains('active');
      faqQuestions.forEach(other => {
        other.classList.remove('active');
        const otherAnswer = other.nextElementSibling;
        if (otherAnswer) otherAnswer.style.display = 'none';
        const icon = other.querySelector('.toggle-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isActive) {
        q.classList.add('active');
        const answer = q.nextElementSibling;
        if (answer) answer.style.display = 'block';
        const icon = q.querySelector('.toggle-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // TEstimonial Carousel
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let index = 0;

  if (track && slides.length) {
    const updateSlide = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    nextBtn?.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateSlide();
    });

    prevBtn?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
    });
  }

  // Contact Form Validation 
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert('Please fill out both email and message fields.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  }

});
