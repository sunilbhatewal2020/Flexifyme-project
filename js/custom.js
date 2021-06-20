$(document).ready(function () {
  $(".loader").delay("600").fadeOut("5000");
  // $(".common-header-wrap").load("include/header.html");
  // $(".common-footer-wrap").load("include/footer.html");

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

  /*
  $(".nav-pills-row .nav-pills .tab-content-wrap").hover(function () {
    $(".nav-pills-row .nav-pills .nav-link").removeClass("active-a");
    $(this).addClass("active-a");
    // $(this).tab('show');
    $(".row.nav-pills-row .tab-content-wrap .tab-pane:first-child")
      .addClass("active")
      .addClass("show");
    // $(this).trigger("click");
  });
*/

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
