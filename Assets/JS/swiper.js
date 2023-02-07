const swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    rewind: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-reviews-next',
      prevEl: '.swiper-reviews-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 40
        },
      }
  });