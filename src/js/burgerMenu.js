document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger');
  const navMenu = document.querySelector('.header__nav');

  function checkScreenSize() {
    if (window.innerWidth < 768) {
      burgerButton.addEventListener('click', toggleMenu);
    } else {
      burgerButton.removeEventListener('click', toggleMenu);
      navMenu.classList.remove('active');
      burgerButton.classList.remove('active');
    }
  }

  function toggleMenu() {
    navMenu.classList.toggle('active');
    burgerButton.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  checkScreenSize();

  window.addEventListener('resize', checkScreenSize);

  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        navMenu.classList.remove('active');
        burgerButton.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});