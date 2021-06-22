$(document).ready(function () {
  //active tab
  var wid = $(window).width();
  $(".common-header").removeClass("fixed-xs");
  $(".common-header .navbar .navbar-toggler").click(function () {
    // $(this).toggleClass("on");
    $(".common-header").toggleClass("fixed-xs");
    return false;
  });
  // if (wid >= 992) {}
  if (wid >= 992) {
    $(window).bind("scroll", function () {
      var navHeight = $(window).height() - 0;
      if ($(window).scrollTop() > 150) {
        $(".common-header").addClass("fixed");
      } else {
        $(".common-header").removeClass("fixed");
      }
    });
  }
  if (wid <= 991) {
    $(window).bind("scroll", function () {
      var navHeight = $(window).height() - 0;
      if ($(window).scrollTop() > 50) {
        $(".common-header").addClass("fixed");
      } else {
        $(".common-header").removeClass("fixed");
      }
    });
  }
  
  // homeCaro
  var homeCaro = document.getElementById('home-caro');
            homeCaro.addEventListener('slide.bs.carousel', function (e) {
                if (e.relatedTarget.id === 'firstSlide') {
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button').removeClass('active');
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button:first-child').addClass('active');
                } else if (e.relatedTarget.id === 'secondSlide') {
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button').removeClass('active');
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(2)').addClass('active');
                }
                else if (e.relatedTarget.id === 'thirdSlide') {
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button').removeClass('active');
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(3)').addClass('active');
                }
                else if (e.relatedTarget.id === 'fourthSlide') {
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button').removeClass('active');
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(4)').addClass('active');
                }
                else {
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button').removeClass('active');
                    $('.home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(5)').addClass('active');
                }
            });

  // $("#trainer5").removeClass("active show");
  $(".nav-pills-row .nav-pills .nav-link").hover(function () {
    $(".nav-pills-row .nav-pills .nav-link").removeClass("active-a");
    // $(this).addClass("active-a");
    // $(this).tab('show');
    $(".row.nav-pills-row .tab-content-wrap .tab-pane")
      .removeClass("active")
      .removeClass("show");
    $(this).trigger("click");
    return false;
  });

  $(".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-yoga-asana-tab").click(function(){
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-5-1").addClass("active");
  });
  $(".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-meditation-tab").click(function(){
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-6-1").addClass("active");
  });
  $(".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-nutrition-tab").click(function(){
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-7-1").addClass("active");
  });
});
