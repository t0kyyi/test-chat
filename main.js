// Menu burger toggle
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav ul');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// AOS initialization
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 800 });
});
