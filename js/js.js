$(window).scroll(function () {

    if ($(this).scrollTop() > 130) {
        $('.down_header').addClass("afterScroolColor");
        $('header').addClass("afterScroolposition");
    }
    else {
        $('.down_header').removeClass("afterScroolColor");
        $('header').removeClass("afterScroolposition");
    }
});





$(window).on('scroll', function () {
    var scrollPosition = $(window).scrollTop();

    $('section').each(function () {
        var sectionTop = $(this).offset().top;
        var sectionBottom = sectionTop + $(this).outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            var sectionId = $(this).attr('id');
            $('header ul li a').removeClass('active');
            $('header ul li a[href="#' + sectionId + '"]').addClass('active');
        }
    });
});









$(window).scroll(function () {

    if ($(this).scrollTop() > 150) {
        $('.top_line').removeClass("disActive");

    }
    else {
        $('.top_line').addClass("disActive");

    }
});





$(".top_line").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


$('.play').click(function () {
    $('.play').addClass("disActive");
    $('.pause').removeClass("disActive");

});

$('.pause').click(function () {

    $('.pause').addClass("disActive");
    $('.play').removeClass("disActive");
});



$(document).ready(function () {
    $('.playBtn .play img').on('click', function (ev) {
        ev.preventDefault();
        var iframe = $('#v1');
        var src = iframe.attr('src');
        src += "&autoplay=1";
        iframe.attr('src', src);
      });



    $('.playBtn .pause img').click(function (ev) {
        ev.preventDefault();
        var iframe = $('#v1');
        var src = iframe.attr('src');
        src = src.replace('&autoplay=1', '&autoplay=0');
        iframe.attr('src', src);
       
    });

    

    


});


 
$('#news1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});





