$(function(){

$('.title__btn').on('click',function(){
  $(this).closest('.grid__content-small').toggleClass('disabled'),
  $(this).closest('.grid__content-small').next().toggleClass('disabled')
});

$('.header__btn').on('click',function(){
  $('.header__navlist-mobile').toggleClass('active-menu'),
  $(this).toggleClass('btn-close')
});


$('.grid__slider').slick({
  autoplay: true,
  arrows: false,
  fade: true,
  dots: true
});

$('.block__slider').slick({
  autoplay: true,
  arrows: false,
  fade: true,
  dots: true
});

$('.close__btn').on('click',function(){
  $(this).closest('.grid__content').toggleClass('disabled'),
  $(this).closest('.grid__content').prev().toggleClass('disabled'),
  $(this).closest('.grid__content').prev().addClass('animate__animated animate__fadeIn')
  // $(this).closest('.grid__content').removeClass('animate__fadeIn').addClass('animate__backOutDown')

});


});
