$(function(){
    var containerEl = document.querySelector('.main-gal');

    var mixer = mixitup(containerEl);

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $('.menu').addClass('bg');
        }
        else{
            $('.menu').removeClass('bg');
        }
    });

    $('.venobox').venobox();

    new WOW().init();

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.recent-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:'.left',
        nextArrow:'.right',
        arrows:true,
        centerMode:true,
        centerPadding:false,
        speed:2000,

        responsive: [
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 481,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                }
              }
          ]
    });

    var html_body = $('html, body');
    $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500);
            return false;
        }
    }
    });

    $('.back2top').on('click', function(){
        $('html, body').animate({scrollTop:0},2000);
     });

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.back2top').fadeIn();
        }
        else {
            $('.back2top').fadeOut(1000);
        }
    });

    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

});