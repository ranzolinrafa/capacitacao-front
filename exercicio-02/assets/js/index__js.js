$(document).ready(function(){
    $('.slider-container').slick({
        infite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<button class='arrow-button slider-arrow--prev'><i class='icon-chevron-left'></i></button>",
        nextArrow:"<button class='arrow-button slider-arrow--next'><i class='icon-chevron-right'></i></button>"
    });
})