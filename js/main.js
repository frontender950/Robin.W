$(document).ready(function(){
  // Мобильное меню <768 (кнопка+меню)
  var button = $(".button");
  var buttonActive = $(".button--active");
  var menu = $(".mobile-menu");

  button.click(function(){
    button.toggleClass("button--active");
    menu.toggleClass("mobile-menu_active");  
  buttonActive.click(function(){
    button.removeClass("button--active");
    });  
  });
  
  // Слайдер slick секции firms
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

  // Табы секции Photography
  var tabsItem = $(".tabs__item");
  var contentItem = $(".content__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs__item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("tabs__item--active");
  });

});