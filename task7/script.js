$(document).ready(function() {

    for (let i = 1; i <= 16; i++){
        $('<img src="pictures/' + i.toString() + '.jpg">').appendTo('.gallery')
    }

    $('.gallery').slick({
        dots: true,
        arrows: true,
        variableWidth: true,
        infinite: false,

        speed: 300,

        autoplay: true,
        autoplaySpeed: 1500,

        slidesToShow: 1,
        slidesToScroll: 2,

        appendDots: $("#dots"),

        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
}); 
  