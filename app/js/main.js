$(function(){

  
  $('select').styler();

  $('.weak-item__star-rate').rateYo({
    rating: 4.5,
    starWidth: '13px',
    normalFill: '#fff',
    ratedFill: '#ffc000',
    spacing: '3px',
    readOnly: true,
  });

  $('.weak__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
  });

});


  