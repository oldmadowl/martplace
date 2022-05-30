$(function(){

  
  $('select, input[type=checkbox]').styler();

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
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $('.feed__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
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

  $('.category__view-btn').on('click', function(){
    $('.category__view-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.category__sort-link').on('click', function(e){
    e.preventDefault();

    $('.category__sort-link').removeClass('active');
    $(this).addClass('active');
  });

  $('.category__range-slider').ionRangeSlider({
    skin: 'round',
    type: 'double',
    min: 0,
    max: 350,
    from: 30,
    to: 300
  });

  $('.category__view-btn--list').on('click', function(){
    $('.category__items').addClass('list');
  });

  $('.category__view-btn--grid').on('click', function(){
    $('.category__items').removeClass('list');
  });

  var mixer = mixitup('.product, .category');

});


  