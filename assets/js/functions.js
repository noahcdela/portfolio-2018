$(function () {

    console.log('js is hooked up');

    $('.project__card').hover(
        function () {
            $(this).children('.project__card__info').children('h2, p').addClass('info--reveal');
            $(this).children('.project__card__info').addClass('card__info--visible');
        },
        function () {
            $(this).children('.project__card__info').children('h2, p').removeClass('info--reveal');
            $(this).children('.project__card__info').removeClass('card__info--visible');
        }
    );

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });



});