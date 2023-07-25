
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
      $("header").removeClass("is-active");
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
      $(".header").addClass("is-active");
    }
  });

});
