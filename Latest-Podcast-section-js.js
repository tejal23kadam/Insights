$(document).ready(function () {

    $("#news-slider").owlCarousel({
        items: 1,
        margin: 20,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: false,
        loop: true,

        //pagination: false, //for version 1
        dots: false, // for version 2         
        //autoPlay:true // for version 1 
        //autoplay: true,//for version 2 
        slideTransition: 'linear',
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            },
            1200: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    $("#video-news-slider").owlCarousel({
        items: 1,
        margin: 20,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: false,
        loop: true,

        //pagination: false, //for version 1
        dots: false, // for version 2         
        //autoPlay:true // for version 1 
        //autoplay: true,//for version 2 
        slideTransition: 'linear',
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            },
            1200: {
                items: 2,
                nav: true,
                loop: true
            }

        }
    });

    $("#hindi-slider").owlCarousel({
        items: 1,
        margin: 20,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: false,
        loop: true,

        //pagination: false, //for version 1
        dots: false, // for version 2         
        //autoPlay:true // for version 1 
        autoplay: true,//for version 2 
        slideTransition: 'linear',
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            },
            1200: {
                items: 3,
                nav: true,
                loop: true
            }

        }
    });

    $("#English-slider").owlCarousel({
        items: 1,
        margin: 20,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: false,
        loop: true,

        //pagination: false, //for version 1
        dots: false, // for version 2         
        //autoPlay:true // for version 1 
        autoplay: true,//for version 2 
        slideTransition: 'linear',
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            },
            1200: {
                items: 3,
                nav: true,
                loop: true
            }

        }
    });

    // Custom Button
    $('#customNextBtn1').click(function () {
        $("#news-slider").trigger('next.owl.carousel');
    });
    $('#customPreviousBtn2').click(function () {
        $("#news-slider").trigger('prev.owl.carousel');
    });

    // video page >  latest podcast >  Custom Button
    $('#customNextBtn1').click(function () {
        $("#video-news-slider").trigger('next.owl.carousel');
    });
    $('#customPreviousBtn2').click(function () {
        $("#video-news-slider").trigger('prev.owl.carousel');
    });

    // Hindi Custom Button
    $('#HindicustomNextBtn1').click(function () {
        $("#hindi-slider").trigger('next.owl.carousel');
    });
    $('#HindicustomNextBtn2').click(function () {
        $("#hindi-slider").trigger('prev.owl.carousel');
    });


    // English Custom Button
    $('#EnglishcustomNextBtn1').click(function () {
        $("#English-slider").trigger('next.owl.carousel');
    });
    $('#EnglishcustomNextBtn2').click(function () {
        $("#English-slider").trigger('prev.owl.carousel');
    });


});
