

// HEADER DYNANMIQUES


$(document).ready(
  function(){
    if($("body").hasClass("blog-page")){
      var bg = 'url:("../' + $(".blog--first .blog__img").attr("src") + '")';
      console.log(bg);
      $(".hero").css('background-img', bg);
      $(".hero__headline").text($(".blog--first .blog__title").text());
      $(".hero__headline").text($(".blog--first .blog__title").text());
      $(".hero__date").text($(".blog--first .blog__date").text());
    }
  }
);
