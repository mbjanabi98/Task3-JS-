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
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// $(window).on('resize', function () {
//     var windowWidth = $(window).width();

//     // Adjust the slider settings based on window width
//     if (windowWidth < 500) {
//         $('#news1').slick('slickSetOption', 'slidesToShow', 1, true);
//     } else if (windowWidth < 768) {
//         $('#news1').slick('slickSetOption', 'slidesToShow', 1, true);
//     } else if (windowWidth > 768 && windowWidth < 1200) {
//         $('#news1').slick('slickSetOption', 'slidesToShow', 3, true);
//     } else {
//         $('#news1').slick('slickSetOption', 'slidesToShow', 3, true);
//     }
// });


$('.menuIvone img').click(function () {
    $(".down_header .menu ul").toggleClass('active');
});



