'use strict';

(function () {
  const sliderProgress = document.querySelector('.slider__progress');
  const sliderWrapper = document.querySelector('.slider__wrapper');

  if (sliderWrapper) {
    sliderWrapper.addEventListener('touchstart', window.move.onTouchStart);
  }
  if (sliderProgress) {
    sliderProgress.addEventListener('mousedown', window.move.onMouseDown);
  }

  window.map.createMap();
})();
