$(function(){

  
  $('select').styler();

  $('.item__star-rate').rateYo({
    rating: 4.5,
    starWidth: '13px',
    normalFill: '#fff',
    ratedFill: '#ffc000',
    spacing: '3px',
    readOnly: true,
  });

  $('.week__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
  });

  $('.feed__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
  });

  $('.footer__col-title').on('click', function(){
    $(this).toggleClass('active');
    $(this).next('.footer__col-body').slideToggle();
  });

  $('.header__form-open').on('click', function(){
    $('.header__form').slideToggle();
  });

  $('.header__options-btn').on('click', function(){
    $('.header__options').toggleClass('active');
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.menu__dropdown, .pages-item').on('click', function(){
    $(this).toggleClass('active');
    $(this).children('.header-dropdown, .pages').toggleClass('active');
  });

  $('.header__pin-wrapper').on('click', function(){
    $(this).children('.pin-menu').toggleClass('active');
  });

  $('.header__user').on('click', function(){
    $('.user__header-dropdown').toggleClass('active');
  });

  var mixer = mixitup('.product');

});


  