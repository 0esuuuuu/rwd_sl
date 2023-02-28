// const { event } = require('jquery');

$(function () {
  $(window).on('load', function () {
    $('.deco_line').addClass('on');
  });

  const slideContainer = document.querySelector('.slide-container');
  const slideWrap = document.querySelector('.slide_wrap');
  const slide = document.querySelector('.slide');
  // 슬라이더가로길이 가져오기
  const slideWrapW = slideWrap.offsetWidth;
  const slideW = slide.offsetWidth;
  let winW = window.innerWidth;
  // let moveMax = (slideWrapW - winW / 2) * -1;
  let moveMax = $('.slide:last-child').offset().left - slideW;
  let slideWrapPos = 0;
  let slidePos = 0;

  console.log(moveMax + '--');

  window.addEventListener('wheel', function (e) {
    e.preventDefault;
    moveSlider(e.deltaY);
    console.log(e.deltaY);
  });

  function moveSlider(amount) {
    slideWrapPos -= amount;
    if (slideWrapPos > moveMax) {
      slideWrapPos = moveMax;
      return;
    } else if (slideWrapPos > 0) {
      slideWrapPos = 0;
      return;
    }
    console.log(slideWrapPos + '====');
    slideWrap.style.transform = 'translateX(' + slideWrapPos + 'px)';
  }
});
