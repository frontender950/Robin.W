$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    slidesToShow:6,
    slidesToScroll:2,
    speed:200,
    infinite: false,
    touchThreshold:20,
    waitForAnimate: false,
    responsive: [
      {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
      }
    },
      {
      breakpoint: 992,
      settings: 'unslick'
    }
  ]

  });
});