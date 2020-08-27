'use strict';
(function () {
  window.move = {
    onMouseDown: function (evt) {
      let pinProgress = document.querySelector('.slider__progress');
      let leftSlide = document.querySelector('.slider__slide--previous');
      let rightSlide = document.querySelector('.slider__slide--next');
      let sliderControl = document.querySelector('.slider__control');
      let sliderWrapper = document.querySelector('.slider__wrapper');

      if (!pinProgress.style.left) {
        pinProgress.style.left = '0px'
      }

      leftSlide.style.width = sliderWrapper.clientWidth / 2 + 'px';
      rightSlide.style.width = sliderWrapper.clientWidth / 2 + 'px';

      let startCoordsX = evt.clientX;

      evt.preventDefault();

      let onMouseMove = function (moveEvt) {
        let shift = startCoordsX - moveEvt.clientX;

        startCoordsX = moveEvt.clientX;

        var leftCoordinates = parseInt(pinProgress.style.left, 10) - shift;

        if (leftCoordinates >= window.options.LEFT_RANGE && leftCoordinates <= window.options.RIGHT_RANGE) {
          pinProgress.style.left = leftCoordinates + 'px';
        } else {
          document.removeEventListener('mousemove', onMouseMove);
        }

        let perc = shift / (parseInt(sliderControl.clientWidth, 10) / 100);

        leftSlide.style.width = parseInt(leftSlide.style.width, 10) - perc * (parseInt(sliderWrapper.clientWidth, 10) / 100)  + 'px';
        rightSlide.style.width = parseInt(rightSlide.style.width, 10) + perc * (parseInt(sliderWrapper.clientWidth, 10) / 100)  + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }
})();
