'use strict';

(function () {
  let sliderProgress = document.querySelector('.slider__progress');

  sliderProgress.addEventListener('mousedown', window.move.onMouseDown);

  window.map.createMap();
})();
