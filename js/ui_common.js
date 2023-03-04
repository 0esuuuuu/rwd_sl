// const { event } = require('jquery');

$(function () {
  $(window).on('load', function () {
    $('.deco_line').addClass('on');
  });

  // top_wrap
  const pr_count = $('.slide').length;
  document.querySelector('.pr_count').innerHTML = '(' + pr_count + ')';

  // main_slider
  const slideWrap = document.querySelector('.slide_wrap');
  const slide = document.querySelector('.slide');
  // 슬라이더가로길이 가져오기
  let slideWrapW = slideWrap.offsetWidth;
  let sliderealW = slideWrap.offsetWidth;
  const slideW = slide.offsetWidth;
  let winW = window.innerWidth;
  // let moveMax = (slideWrapW - winW / 2) * -1;
  let moveMax = slideWrapW * -1;
  // let moveMax = $('.slide:last-child').offset().left - slideW;
  let slideWrapPos = 0;

  console.log(slideWrapW + '--');
  console.log(slideWrap.offsetWidth + '++');

  window.addEventListener('wheel', function (e) {
    e.preventDefault;

    if (winW > 899) {
      moveSlider(e.deltaY);
    }
    console.log(e.deltaY);

    const sl = $('.slide_wrap').position().left;
    const w = slideWrapW;
    // 현재 위치의 스크롤 백분율
    const slPer = Math.floor((sl / w) * -100);
    console.log(sl + '========');

    document.querySelector('.scroll').innerHTML = slPer;
  });

  function moveSlider(amount) {
    slideWrapPos -= amount;
    if (slideWrapPos < moveMax) {
      slideWrapPos = moveMax;
      return;
    } else if (slideWrapPos > 0) {
      slideWrapPos = 0;
      return;
    }
    slideWrap.style.transform = 'translateX(' + slideWrapPos + 'px)';
    console.log(slideWrapPos + '====');
  }

  // function moveSlider(amount) {
  //   slideWrapPos -= amount;
  //   if (slideWrapPos > 0) {
  //     slideWrapPos = 0;
  //     return;
  //   } else if (slideWrapPos > moveMax) {
  //     slideWrapPos = moveMax;
  //     return;
  //   }
  //   slideWrap.style.transform = 'translateX(' + slideWrapPos + 'px)';
  //   console.log(slideWrapPos + '====');
  // }
});
