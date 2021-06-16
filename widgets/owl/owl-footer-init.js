//custom functions here Prismic Reflections&reg;
$(document).ready(function () {
    $('.hon-mentions-carousel').owlCarousel({
        
        
    loop: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      600: {
        items: 2,
        autoHeight: true
      },
      992: {
        items: 3
      }
    }
  });
  $('.client-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      600: {
        items: 3,
        autoHeight: true
      },
      1000: {
        items: 5
      }
    }
  });
    
});