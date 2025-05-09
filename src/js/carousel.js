document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const banners = document.querySelectorAll('.banner');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = banners.length;

  function showSlide(index) {
    banners.forEach(banner => banner.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    banners[index].classList.add('active');
    dots[index]?.classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      showSlide(slideIndex);
    });
  });

  setInterval(nextSlide, 5000);
});