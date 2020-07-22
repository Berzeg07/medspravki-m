$(document).ready(function() {
    $(".mob-nav__item").click(function() {
        var $this = $(this);
        var elem = $(this).find('.mob-nav__dropdown');

        if (!$this.hasClass("is-active")) {
            $(".mob-nav__dropdown").slideUp();
            $(".mob-nav__item").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        elem.slideToggle();

    });

    $(".burger").click(function() {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
    });

    var filialSlider = new Swiper('.filials-slider', {
        slidesPerView: 4,
        spaceBetween: 38,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-n',
            prevEl: '.swiper-button-prev-p',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1840: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });











});