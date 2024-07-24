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


let swiper1 = new Swiper(".players__swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".players__btn-next",
    prevEl: ".players__btn-prev",
  },
});
let swiper2 = new Swiper(".players__feedback-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".players__feedback-pag",
    clickable: true,
  },
  navigation: {
    nextEl: ".players__feedback-next",
    prevEl: ".players__feedback-prev",
  },
});