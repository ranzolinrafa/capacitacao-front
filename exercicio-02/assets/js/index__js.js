var prevArrow = $('.slider-arrow--prev');
var nextArrow = $('.slider-arrow--next');

$('.slider-container').slick({
    infite: true,
    slidesToShow: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    slidesToScroll: 1
});