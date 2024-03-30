$(document).ready(function() {
 
  $("#news-slider").owlCarousel({
          items: 1,
          margin:20,
          itemsDesktop: [1199, 3],
          itemsDesktopSmall: [980, 2],
          itemsMobile: [600, 1],
          navigation: true,
          loop:true,
     
          navigationText: ["", ""],
          //pagination: false, //for version 1
          dots: false, // for version 2         
          //autoPlay:true // for version 1 
          autoplay: true,//for version 2 
          slideTransition: 'linear',
          
          autoplaySpeed: 1000,  
        
          
          responsiveClass:true,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  600:{
                      items:1,
                      nav:false
                  },
                  800:{
                      items:2,
                      nav:true,
                      loop:true
                  },
                  1000:{
                      items:2,
                      nav:true,
                      loop:true
                  },
                  1200:{
                      items:3,
                      nav:true,
                      loop:true
                  },
                  1550:{
                    items:4,
                    nav:true,
                    loop:true
                }
              }
        });
  });
 