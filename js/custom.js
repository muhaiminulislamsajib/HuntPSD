
$(function(){
    $('.banner_main').slick({
      infinite: true,
      speed: 2000,
      fade: true,
      prevArrow: ".prev",
      nextArrow:".next",
    });
})
  

$(function(){
  $('.slidermain').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
  });
})



