$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(".nav a").click(function () {
    $(".hamburger").removeClass("active");
    $(".nav").removeClass("active");
  });
});
