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
  
  


  // overflow x hidden  
  var widthWindow = $(window).width();
  $('.overflow-hidden-js').css({'width': widthWindow, 'overflow': 'hidden'});
  $(window).on('resize', function () {
    var widthWindow = $(window).width();
    $('.overflow-hidden-js').css({'width': widthWindow, 'overflow': 'hidden'});
  });
});
