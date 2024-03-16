const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 6,
    spaceBetween: 30,

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});