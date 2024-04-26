$(document).ready(function() {
 
    $("#review-slider").owlCarousel({
            items: 1,
            margin:20,
            animateIn: 'fadeIn',
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsMobile: [600, 1],
            navigation: true,
            loop:true,
       
            navigationText: ["", ""],
            //pagination: false, //for version 1
            dots: true, // for version 2         
           
          });
          var owl = $(".owl-carousel");
          owl.owlCarousel();
          $(".next-btn").click(function () {
            owl.trigger("next.owl.carousel");
          });
          $(".prev-btn").click(function () {
            owl.trigger("prev.owl.carousel");
          });
          $(".prev-btn").addClass("disabled");
          $(owl).on("translated.owl.carousel", function (event) {
            if ($(".owl-prev").hasClass("disabled")) {
              $(".prev-btn").addClass("disabled");
            } else {
              $(".prev-btn").removeClass("disabled");
            }
            if ($(".owl-next").hasClass("disabled")) {
              $(".next-btn").addClass("disabled");
            } else {
              $(".next-btn").removeClass("disabled");
            }
          });
        });

   
  
    $(document).ready(function(){
      $('.slider').slick({
        dots: true,
      });
    });