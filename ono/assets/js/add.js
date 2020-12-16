$(window).scroll(function () {
    anim();
});
$(window).on('load', function () {
    setTimeout(function () {
        anim();
    }, 0);
});
function anim() {
    $('#index-point-pc .swiper-wrapper .swiper-slide').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200) {
            $(this).addClass('show');
        }
    });
}