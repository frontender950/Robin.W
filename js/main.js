$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    slidesToShow:4,
    slidesToScroll:2,
    speed:200,
    infinite: false,
    touchThreshold:20,
    waitForAnimate: false,
  });
});