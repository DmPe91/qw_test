let allSlide = document.querySelectorAll(".review");
let allCounter = document.querySelector(".js-all-counter");
allCounter.innerHTML = allSlide.length;
let counter = document.querySelector(".js-counter");
var swiper = new Swiper(".swiper", {
  slidesPerView: 1.1,
  spaceBetween: 10,

  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      counter.innerHTML = this.realIndex + 1;
    },
    slideChange: function () {
      counter.innerHTML = this.realIndex + 1;
    },
  },
});
