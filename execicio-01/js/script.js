$( document ).ready(function() {
    $(".ul-slick").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,  
        prevArrow:"<button class='slick-arrow-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:"<button class='slick-arrow-right'><i class='fas fa-chevron-right'></i></button>"
    });

    $(".nav-bar .container-ul li:first-child a:first-child").addClass("is-clicked");
    $(".nav-bar .link").click(function(){
        $(".nav-bar .container-ul:first-child").removeClass("is-clicked");
        $(".nav-bar .link").removeClass("is-clicked");
        $(this).addClass("is-clicked");
    });
});

          

