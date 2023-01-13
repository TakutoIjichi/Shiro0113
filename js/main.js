'use strict'

{
  
  
  $(function() {
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  $('.sp-menu').click(function() {
    $('.bar1, .bar2, .bar3').toggleClass('open');
    $('.overlay').toggleClass('show');
  })
});

$(window).scroll(function(){
  if ($(window).scrollTop() > 40) {
    $('#header').addClass('position_change');
  } else {
    $('#header').removeClass('position_change');
  }
});

$(window).scroll(function(){
  if ($(window).scrollTop() > 610) {
    $('#header').addClass('color_change');
  } else {
    $('#header').removeClass('color_change');
  }
});

$(window).scroll(function(){
  if ($(window).scrollTop() > 610) {
    $('span').addClass('bar-color');
  } else {
    $('span').removeClass('bar-color');
  }
});

const overlay = document.querySelector('.overlay')

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
})

}