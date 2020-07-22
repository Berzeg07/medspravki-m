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

    $(".table-show").click(function() {
        var $this = $(this);
        // var elem = $(this).find('.mob-nav__dropdown');

        if (!$this.hasClass("is-active")) {
            $(".table-wrap").slideUp();
            $(".table-show").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        $this.next().slideToggle();

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

    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 991 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.advantag-slider', {
                slidesPerView: 4,
                spaceBetween: 38,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {

                    1279: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1599: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
        } else if (screenWidth < 992 && myAdvSlider != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initSwiper();
    });

    var catSlider = new Swiper('.cat-slider', {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-nc',
            prevEl: '.swiper-button-prev-pc',
        },

        breakpoints: {
            499: {
                slidesPerView: 1,

            },
            767: {
                slidesPerView: 2,

            },
            991: {
                slidesPerView: 3,

            },
            1279: {
                slidesPerView: 4,

            },
            1599: {
                slidesPerView: 5,

            },
        }
    });











});