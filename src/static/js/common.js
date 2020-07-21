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
});