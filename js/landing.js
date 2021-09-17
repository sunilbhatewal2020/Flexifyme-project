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
      $(".gotop").css({
        bottom: "25px",
      });
    } else {
      $(".gotop").css({
        bottom: "-100px",
      });
    }
  });
  $(".gotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: "0px",
      },
      800
    );
    return false;
  });


  // aos init
  AOS.init({
    duration: 1200,
    easing: "ease-in-out-back",
    disable: "mobile",
    once: true,
    offset: 200,
    anchorPlacement: "top-center",
  });

// owl init
$('.owl-comman-landing').owlCarousel({loop: false, margin: 30, dots: false, autoWidth: false, 
  nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive: {
      0:{
          items:1, 
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});
$(".owl-comman-step").owlCarousel({ loop: false, margin: 0, dots: false, autoWidth: false, 
  nav: true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
responsive: {
    0:{
        items:1, 
          },
    600:{
        items:0
    },
    1000:{
        items:2
    }
}
});


    setTimeout(function () {
      // sessions pricing
      $("#one-session-btn-trigger").trigger("click");
      //tab usecase
      $("#one-session-btn-tab").click(function(){
        $("#one-session-btn-trigger").trigger("click");
      });
      $("#group-session-btn-tab").click(function(){
        $("#group-session-btn-trigger").trigger("click");
      });
       // Configure/customize these variables.
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="#" class="morelink resent-otp-btn text-white">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
    }, 1000);
  
 

});
