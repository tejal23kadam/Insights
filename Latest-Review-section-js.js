$(document).ready(function() {
 
    $("#review-slider").owlCarousel({
            items: 1,
            margin:20,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsMobile: [600, 1],
            navigation: true,
            loop:true,
       
            navigationText: ["", ""],
            //pagination: false, //for version 1
            dots: true, // for version 2         
           
          });
    });
   
  
    $(document).ready(function(){
      $('.slider').slick({
        dots: true,
      });
    });