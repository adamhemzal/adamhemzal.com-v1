$(document).ready(function(){

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("header").addClass("box-shadow-scroll");
    } else {
      $("header").removeClass("box-shadow-scroll");
    }
  }); 

  $(".header-photo")
  .mouseover(function() {
    $(this).attr("srcset", "img/me/adam-hemzal-real-optimized.png, img/me/adam-hemzal-real.png 2x");
  })
  .mouseout(function() {
    $(this).attr("srcset", "img/me/adam-hemzal-drawing-optimized.png, img/me/adam-hemzal-drawing.png 2x");
  });
    
  $('.slider').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 8000,
    });
  
});