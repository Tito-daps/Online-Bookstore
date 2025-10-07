document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

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

// === Login Logic with localStorage ===
const loginModal = document.getElementById('loginModal');
const homepage = document.getElementById('homepage');
const loginForm = document.getElementById('loginForm');

// If already logged in before, skip login modal
if (localStorage.getItem('isLoggedIn') === 'true') {
  loginModal.style.display = 'none';
  homepage.style.display = 'block';
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      loginModal.style.display = 'none';
      homepage.style.display = 'block';
    } else {
      alert('Please enter both email and password.');
    }
  });
}

// Optional: Logout button (if you add one)
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    location.reload(); // Reload to show login again
  });
}

