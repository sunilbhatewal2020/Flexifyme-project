$(document).ready(function () {
  // var lastScrollTop = 0;
  // $(window).scroll(function (event) {
  // 	var st = $(this).scrollTop();
  // 	if (st > 0) {
  // 		$(".common-header").addClass("nav-down");
  // 	} else {
  // 		$(".common-header").removeClass("nav-down");
  // 	}
  // 	lastScrollTop = st;
  // });

  // $(".start-refer-btn").click(function(){
  // 	$(".refer-form-sec").addClass("active");
  // });
  // $(".close-sec").click(function(){
  // 	$(".refer-form-sec").removeClass("active");
  // });

  $(".loader").delay("600").fadeOut("5000");

  $(".common-header-wrap").load("include/header.html");
  $(".common-footer-wrap").load("include/footer.html");

  
    
  /*

  setTimeout(function () {
    // Configure/customize these variables.
    var showChar = 200; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";

    $(".read-more-wrap .more").each(function () {
      var content = $(this).html();

      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html =
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '&nbsp;</span><span class="morecontent"><span>' +
          h +
          '</span>&nbsp;&nbsp;<a href="" class="morelink btn btn-link bttn-link">' +
          moretext +
          "</a></span>";

        $(this).html(html);
      }
    });

    $(".read-more-wrap .morelink").click(function () {
      if ($(this).hasClass("less")) {
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
*/


});
