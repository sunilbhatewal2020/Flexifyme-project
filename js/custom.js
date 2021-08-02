$(document).ready(function () {
  $(".loader").delay("600").fadeOut("5000");
  // $(".common-header-wrap").load("include/header.html");
  // $(".common-footer-wrap").load("include/footer.html");

  //active tab
  var wid = $(window).width();

  $(".btn-time").click(function(){
    $(".btn-time").removeClass("active");
    $(this).addClass("active");
  });
  $(".btn-day").click(function(){
    $(".btn-day").removeClass("active");
    $(this).addClass("active");
  });
  
  $(".panel-carosual-xs .hide-btn").click(function(){
    $(".panel-carosual-xs .hide-btn, .panel-carosual-xs .open-btn").hide();
    $(".panel-carosual-xs .open-btn").fadeIn();
    $(".contact-col-right-outer-carosual .contact-caro-info-outer").fadeOut();
  });
  $(".panel-carosual-xs .open-btn").click(function(){
    $(".panel-carosual-xs .hide-btn, .panel-carosual-xs .open-btn").hide();
    $(".panel-carosual-xs .hide-btn").fadeIn();
    $(".contact-col-right-outer-carosual .contact-caro-info-outer").fadeIn();
  });


  // overflow x hidden  
  var widthWindow = $(window).width();
  $('.overflow-hidden-js').css({'width': widthWindow, 'overflow': 'hidden'});
  $(window).on('resize', function () {
    var widthWindow = $(window).width();
    $('.overflow-hidden-js').css({'width': widthWindow, 'overflow': 'hidden'});
  });
});
