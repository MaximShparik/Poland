$(function(){

$('.title__btn').on('click',function(){
  $(this).closest('.grid__content-small').toggleClass('disabled'),
  $(this).closest('.grid__content-small').next().toggleClass('disabled')
});


$('.grid__slider').slick({
  autoplay: true,
  arrows: false,
  fade: true,
  dots: true
});



});
