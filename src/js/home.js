const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  // spaceBetween: 16,
  slidesPerView: 'auto',
  // slidesOffsetBefore: 20,
  // slidesOffsetAfter: 20
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  speed: 5000,
  loop: true,
  freeMode: true
});

// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity(elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity('.main-carousel', {
//   // options
// });
