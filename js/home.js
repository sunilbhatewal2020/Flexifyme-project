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

  //for fixed header
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 0;
    if ($(window).scrollTop() > 50) {
      $(".common-header").addClass("fixed");
    } else {
      $(".common-header").removeClass("fixed");
    }
  });

  //for header opacity
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".home-sec1 .overlay").css({
      opacity: function () {
        var elementHeight = $(this).height(),
          opacity =
            (1 - (elementHeight - scrollTop) / elementHeight) * 0.7 + 0.6;

        return opacity;
      },
    });
  });

  //goto top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.gotop').css({
            bottom: "25px"
        });
    } else {
        $('.gotop').css({
            bottom: "-100px"
        });
    }
});
$('.gotop').click(function () {
    $('html, body').animate({
        scrollTop: '0px'
    }, 800);
    return false;
});

  if (wid >= 992) {
    // alert(1);
  // ScrollMagic
  var controller = new ScrollMagic.Controller();
  // build scene
  let heightS = document.getElementById("sec2").clientHeight;
  // console.log(heightSDiv);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.15,
    duration: heightS,
  })
    .setPin("#pin1")
    // .addIndicators({ name: "1 (duration: )" .heightS }) // add indicators (requires plugin)
    .setClassToggle(".home-hero-caro-sec", "fixed-pin")
    .addTo(controller)
    .on("progress", function (f) {
      // $("#progress").text(e.progress.toFixed(3));
      // home carosual scroll
      var progressvalue = Math.floor(100 * f.progress);      
     console.log(progressvalue);     
     if((progressvalue >= 0) && (progressvalue <= 24) ){
      $('#home-caro .carousel-indicators-testimonial button:nth-child(1)').trigger("click");
      return false;
     }
     if((progressvalue >= 25) && (progressvalue <= 49) ){
      $('#home-caro .carousel-indicators-testimonial button:nth-child(2)').trigger("click");
      return false;
     }
     else if((progressvalue >= 50) && (progressvalue <= 74) ){
      $('#home-caro .carousel-indicators-testimonial button:nth-child(3)').trigger("click");
      return false;
     }
     else if((progressvalue >= 75) && (progressvalue <= 101) ){
      $('#home-caro .carousel-indicators-testimonial button:nth-child(4)').trigger("click");
      return false;
     }
    })
    .on("start", function () {
      $('#home-caro .carousel-indicators-testimonial button:nth-child(1)').trigger("click");
      return false;
    })
    .on("end", function () {
      // $('#home-caro .carousel-item').last().addClass('active')
      $('#home-caro .carousel-indicators-testimonial button:nth-child(4)').trigger("click");
      return false;
   });

  //  let heightF = document.querySelector(".common-footer-wrap").clientHeight;

  //  var scene2 = new ScrollMagic.Scene({
  //   triggerElement: "#trigger2",
  //   triggerHook: 0.99,
  //   duration: heightF + 50,
  // })
  // .setPin(".common-footer-inner")
  //   //  .setClassToggle(".common-footer-wrap", "fixed-footer")
  //   .addIndicators({ name: "1 (duration: )" .heightF })
  //   .addTo(controller)

  }
  // homeCaro
  var homeCaro = document.getElementById("home-caro");
  homeCaro.addEventListener("slide.bs.carousel", function (e) {
    if (e.relatedTarget.id === "firstSlide") {
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button").removeClass("active");
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button:first-child").addClass("active");
    } else if (e.relatedTarget.id === "secondSlide") {
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button").removeClass("active");
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(2)").addClass("active");
    } else if (e.relatedTarget.id === "thirdSlide") {
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button").removeClass("active");
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(3)").addClass("active");
    } else if (e.relatedTarget.id === "fourthSlide") {
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button").removeClass("active");
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(4)").addClass("active");
    } else {
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button").removeClass("active");
      $(".home-sec3 .carousel-indicators.carousel-indicators-testimonial button:nth-child(5)").addClass("active");
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

  $(
    ".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-yoga-asana-tab"
  ).click(function () {
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-5-1").addClass("active");
  });
  $(
    ".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-meditation-tab"
  ).click(function () {
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-6-1").addClass("active");
  });
  $(
    ".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-nutrition-tab"
  ).click(function () {
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-7-1").addClass("active");
  });

  $(".home-flex-tab-btn-wrap .home-sec4-5-1").click(function () {
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-5-1").addClass("active");
    $(
      ".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-yoga-asana-tab"
    ).trigger("click");
  });
  $(".home-flex-tab-btn-wrap .home-sec4-6-1").click(function () {
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-6-1").addClass("active");
    $(
      ".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-meditation-tab"
    ).trigger("click");
  });
  $(".home-flex-tab-btn-wrap .home-sec4-7-1").click(function () {
    $(".home-sec4-5-1, .home-sec4-6-1, .home-sec4-7-1").removeClass("active");
    $(".home-sec4-7-1").addClass("active");
    $(
      ".home-sec4 .pills-tab-wrap .nav-pills .nav-link#pills-nutrition-tab"
    ).trigger("click");
  });

  // aos animate
 /* AOS.init({
    duration: 1000,
    disable: 'mobile',
    delay: 600,
    // disable: false,
    anchorPlacement: 'center-center',
    disable: function () {
            var maxWidth = 1199;
            return window.innerWidth < maxWidth;
    },
    once: true,
    offset: 80,
    easing: 'linear', //easing: 'ease-in-out',
});
*/
AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
  disable: 'mobile',
  once: true,
  offset: 200,
  anchorPlacement: 'top-center'
});
});
