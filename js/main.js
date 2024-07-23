'use strict';

window.addEventListener('DOMContentLoaded',function() {
  const blocks = document.querySelectorAll('.block');
  let currentIndex = 0;

  function showBlock(index){
    blocks.forEach(block => {
      block.classList.remove('active');
    });
    blocks[index].classList.add('active');
  }

  showBlock(currentIndex);

  document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? blocks.length - 1 : currentIndex - 1;
    showBlock(currentIndex);
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex === blocks.length - 1) ? 0 : currentIndex + 1;
    showBlock(currentIndex);
  });
});


let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});