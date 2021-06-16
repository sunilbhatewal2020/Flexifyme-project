/*$(document).ready(function(){$('.sb-mobile-slider').owlCarousel({margin:50,nav:false,responsiveClass:true,autoplay:true,center:true,loop:true,dots:false,mouseDrag:true,touchDrag:true,responsive:{0:{items:1},768:{items:3,nav:true},1000:{items:3}}});$('.approach-owl-carousel').owlCarousel({loop:true,margin:50,nav:false,responsiveClass:true,autoplay:false,autoplayTimeout:5000,dots:true,mouseDrag:true,touchDrag:true,responsive:{0:{items:1,autoHeight:true},768:{items:2,autoHeight:true},1000:{items:2}}});$('.clientsay').owlCarousel({loop:true,margin:10,nav:false,mouseDrag:true,touchDrag:true,autoplay:true,autoplayTimeout:5000,responsive:{0:{items:1,autoHeight:true},600:{items:1,autoHeight:true},1000:{items:1}}});$('#whats-cooking').owlCarousel({loop:true,nav:false,responsiveClass:true,responsive:{0:{items:1,mouseDrag:true,touchDrag:true},600:{items:2,mouseDrag:true,touchDrag:true,margin:15},1000:{items:4,mouseDrag:false,touchDrag:false,margin:15}}});if(window.innerWidth>1199){$('#all-btn').trigger('click');}else{$('#portfolio-new').owlCarousel({responsiveClass:true,dots:false,pagination:false,nav:true,responsive:{0:{items:1,mouseDrag:true,touchDrag:true,nav:true},600:{items:2,mouseDrag:true,touchDrag:true,margin:20,nav:true},1199:{items:2,mouseDrag:true,touchDrag:true,margin:20,nav:true}}});}$('#we-served-slider').owlCarousel({loop:false,nav:false,responsiveClass:true,responsive:{0:{items:1,mouseDrag:true,touchDrag:true,autoHeight:true},600:{items:2,mouseDrag:true,touchDrag:true,margin:30},1200:{items:3,mouseDrag:true,touchDrag:true,margin:30}}});$('.ambika-logo-slider').owlCarousel({loop:true,nav:false,dots:false,mouseDrag:false,touchDrag:false,items:1,animateOut:'fadeOut',autoplay:true,autoplayTimeout:1500});});*/

$(document).ready(function () {
   $('.moneyguru-mob-slider').owlCarousel({
    dots: true, nav: false, margin: 10, autoplay: true, mouseDrag: true, touchDrag: true, loop: true,  autoplayTimeout: 5000, video:true, responsive: {
      0: {
        items: 1,
        dots: true
      }
      , 575: {
        items: 2,
        dots: true
      }
      , 768: {
        items: 3,
        dots: true
      }
      , 992: {
        items: 3,
        dots: true
      }
      , 1200: {
        items: 4,
        dots: true
      }
    }
  });

});
