
// EFFET PARALLAX

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var $parallax = $(".hero__parallax");
var heroHeight = $(".hero").height() + windowHeight;
var scrollLevel;
var heroTop;
var max = 100;

var parallaxEffect = function(){
  if (windowWidth > 640) {
    scrollLevel = $(window).scrollTop();
    if (scrollLevel > 0 && scrollLevel < heroHeight) {
      heroTop = scrollLevel / heroHeight * max - max + '%';
      console.log(heroTop);
      $parallax.css('top', heroTop);
    }
  }
};

window.addEventListener('scroll', _.throttle(parallaxEffect, 10));


// NAV MOBILE

var opened = false;
var $menu = $(".menu");

$(".menu__burger").click(
  function(){
    if (opened == false) {
      $(".menu__wrapper").slideDown();
      opened = true;
    } else {
      $(".menu__wrapper").slideUp();
      opened = false;
    }
  }
);

var navColorChange = function(){
  scrollLevel = $(window).scrollTop();
  if (scrollLevel > 0) {
    $menu.addClass("scroll");
  } else {
    $menu.removeClass("scroll");
  }
};

window.addEventListener('scroll', _.throttle(navColorChange, 100));


// SEARCH BAR


$(".search__bar").on('focus', function(){
  $(".search__container").addClass("focus");
});

$(".search__bar").on('blur', function(){
  $(".search__container").removeClass("focus");
});
