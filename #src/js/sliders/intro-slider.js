if (document.querySelector(".slider-intro__main")) {
  let myProductSlider = new Swiper(".slider-intro__main", {
    speed: 800,
    // loop: true,
    direction: "vertical",
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 1,

    grabCursor: false,
    slideToClickedSlide: false,

    // Скролл

    scrollbar: {
      el: ".intro__scrollbar",
      // Возможность перетаскивать скролл
      draggable: true,
    },

    // Автопрокрутка

    autoplay: {
      // Пауза между прокруткой
      delay: 5000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: false,
    },
  });
}
