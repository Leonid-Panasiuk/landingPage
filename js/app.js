$(document).ready(function () {

   $('.slider').slick({
      autoplay: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      pauseOnHover: false,
   });

   $("a.topLink").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1500,
         easing: "swing"
      });
      return false;
   });
   $("a.linktop").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1500,
         easing: "swing"
      });
      return false;
      
   });
   var defaultHeight = 20;
   var text = $(".text");
   var textHeight = text[0].scrollHeight;
   var button = $(".button");
   text.css({"max-height": defaultHeight, "overflow": "hidden"});
   
   button.on("click", function(){
     var newHeight = 0;
     if (text.hasClass("active")) {
       newHeight = defaultHeight;
       text.removeClass("active");
     } else {
       newHeight = textHeight;
       text.addClass("active");
     }
     text.animate({
       "max-height": newHeight
     }, 500);
     console.log(newHeight);
   });

});

var defaultHeight = 20;
var text = $(".text-1");
var textHeight = text[0].scrollHeight;
var button = $(".button-1");
text.css({"max-height": defaultHeight, "overflow": "hidden"});

button.on("click", function(){
  var newHeight = 0;
  if (text.hasClass("active")) {
    newHeight = defaultHeight;
    text.removeClass("active");
  } else {
    newHeight = textHeight;
    text.addClass("active");
  }
  text.animate({
    "max-height": newHeight
  }, 500);
  console.log(newHeight);
});

 
