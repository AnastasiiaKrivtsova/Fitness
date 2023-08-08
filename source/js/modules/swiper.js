import Swiper from '../vendor/swiper.js';

export const setSwiper = () => {
  const swiperCoaches = new Swiper('.coaches__swiper', {
    // Optional parameters
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.coaches__swiper-button--next',
      prevEl: '.coaches__swiper-button--prev',
    },
  });

  const swiperReviews = new Swiper('.reviews__swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
      disabledClass: 'reviews__button-disabled',
    },
  });

  swiperCoaches.enable();
  swiperReviews.enable();
};
