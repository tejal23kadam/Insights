$(document).ready(function() {
 
    $("#review-slider").owlCarousel({
            items: 1,
            margin:20,
            animateIn: 'fadeIn',
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsMobile: [600, 1],           
            loop:true,
            //pagination: false, //for version 1
            dots: true, // for version 2         
           
          });
          
         // Custom Button
          $('#customNextBtn').click(function() {
            $("#review-slider").trigger('next.owl.carousel');
          });
          $('#customPreviousBtn').click(function() {
            $("#review-slider").trigger('prev.owl.carousel');
            });
        });

   
  
    $(document).ready(function(){
      $('.slider').slick({
        dots: true,
      });
    });