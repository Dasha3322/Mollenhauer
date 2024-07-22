// const swiper = new Swiper(".mySwiper", {
//     // slidesPerView: 5,
//     spaceBetween: 24,
//     freeMode: true,
//     slidesPerView: "auto",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

$(document).ready(function(){
    $(".toggle").click(function(){
      // добавление или удаление класса "active" у элемента с id "content" при каждом клике на кнопку
      $(".expertise__item-counter").toggleClass("active"); 
    });
  });
  $(document).ready(function(){
    $(".toggle").click(function(){
      // добавление или удаление класса "active" у элемента с id "content" при каждом клике на кнопку
      $(".expertise__item-name").toggleClass("active"); 
    });
  });


// $(document).ready(function () {


// 	$('.expertise__button-next').on('click', function () {
// 		if ($('.expertise__item-counter.active').index() == -1) {
// 			$('.expertise__item-counter:first-child').addClass('active');
// 		} else {

// 			$('.expertise__item-counter.active').expertise__button-next('.expertise__item-counter').addClass('active');
// 			$('.expertise__item-counter.active').expertise__button-prev('.expertise__item-counter').removeClass('active');
// 		}

// 	});


// 	$('.expertise__button-prev').on('click', function () {
// 		if ($('.expertise__item.active').index() == -1) {
// 			/* без действий */
// 		} else {

// 			$('.expertise__item.active').prev('expertise__item').addClass('active');
// 			$('.expertise__item.active').next('dexpertise__item').removeClass('active');
// 		}

// 	});


// });