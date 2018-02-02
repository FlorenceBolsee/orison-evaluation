// HEADER DYNANMIQUES

var bg;


$(document).ready(
  function(){
    if($("body").hasClass("blog-page")){
      bg = 'url("' + $(".blog--last .blog__img").attr("src") + '")';
      $(".hero__headline").text($(".blog--last .blog__title").text());
      $(".hero__date").text($(".blog--last .blog__date").text().slice(0, -3));
    }
    if($("body").hasClass("single-page")){
      bg = 'url("' + $(".blog-full").data("img") + '")';
      $(".hero__headline").text($(".blog-full").data("title"));
      $(".hero__date").text($(".blog-full").data("date"));
    }
    if($("body").hasClass("blog-page") || $("body").hasClass("single-page")){
      $(".hero").css('background', 'rgba(0, 0, 0, .5)');
      $(".hero__parallax").css('background-image', bg);
    }
  }
);

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
