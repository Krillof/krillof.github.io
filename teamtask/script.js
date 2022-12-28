// JavaScript source code
$(function(){
    $('.slick_rev').slick({
        dots: false,
        slidesToShow:1,
        slidesToScroll:1,
        adaptiveHeight: true,
        prevArrow: '.slick_prev',
        nextArrow: '.slick_next',
        swipe: false,
    });

    $('.first_slick').slick({
        autoplay: true,
        centerMode: true,
        dots:false,
        arrows:false,
        slidesToShow:2,
        slidesToScroll:1,
    });

    $('.sec_slick').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '110px',
        dots:false,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed: 3500,
    });
})

$('.slick_rev').on('afterChange',function(event, slick, currentSlide, nextSlide){
    $('.cur_num').text('0'+(currentSlide+1));
})

$(function(){
    $(".form_a").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("We received your submission, thank you!");
                }else{
                    alert("An error occured: " + response.message);
                }
            },
            error: function(){
                alert("Connection error. Please, try again later!");
                }
        });
    });
})

var el = document.getElementById("navContent");

function toggle() {
  el.style.display = (el.style.display == 'grid') ? 'none' : 'grid';
}
