$(document).ready(function(){

    //disable console log
    console.log = function() {}

    /*
    * Copyright (c) 2016 Milan Kyncl
    * Licensed under the MIT license.
    *
    * jquery.copy-to-clipboard plugin
    * https://github.com/mmkyncl/jquery-copy-to-clipboard
    *
    */

   $.fn.CopyToClipboard = function() {
    var textToCopy = false;
    if(this.is('select') || this.is('textarea') || this.is('input')){
        textToCopy = this.val();
    }else {
        textToCopy = this.text();
    }
    CopyToClipboard(textToCopy);
  };

  function CopyToClipboard( val ){
    var hiddenClipboard = $('#_hiddenClipboard_');
    if(!hiddenClipboard.length){
        $('body').append('<textarea style="position:absolute;top: -9999px;" id="_hiddenClipboard_"></textarea>');
        hiddenClipboard = $('#_hiddenClipboard_');
    }
    hiddenClipboard.html(val);
    hiddenClipboard.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    hiddenClipboard.remove();
  }

  //ADAM'S CODE
  var mail_adam = "adam";
  var mail_hemzal = ".hemzal";
  var mail_at = "@";
  var mail_gmail = "gmail.com";

  var mail_connection = mail_adam + mail_hemzal + mail_at + mail_gmail;

  //SCROLL NAV
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("header").addClass("box-shadow-scroll");
    } else {
      $("header").removeClass("box-shadow-scroll");
    }
  }); 

  //<a class="contact-mail flex-align-items-center text-padding-top-bot" href="#"><i class="icon-mail-alt" aria-hidden="true"></i> adam.hemzal@gmail.com</a>

  //ANTI SPAM MAIL
  $("#contact-mail-append").append("<a class='contact-mail flex-align-items-center text-padding-top-bot' href='#'><i class='icon-mail-alt' aria-hidden='true'></i>"+mail_connection+"</a>");
  $(".contact-mail").click(function(e) {
    e.preventDefault();
    $(this).CopyToClipboard();
    alert("Email was copied to the clipboard!");
  });

  //CHANGING HEADER
  $(".header-photo")
  .mouseover(function() {
    $(this).attr("srcset", "img/me/adam-hemzal-real-optimized.png, img/me/adam-hemzal-real.png 2x");
  })
  .mouseout(function() {
    $(this).attr("srcset", "img/me/adam-hemzal-drawing-optimized.png, img/me/adam-hemzal-drawing.png 2x");
  });
    
  //SLIDER
  $('.slider').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 8000,
    });
  
});