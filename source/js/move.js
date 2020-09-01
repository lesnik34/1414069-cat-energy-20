'use strict';
(function () {
  const pinProgress = document.querySelector('.slider__progress');
  const leftSlide = document.querySelector('.slider__slide--previous');
  const rightSlide = document.querySelector('.slider__slide--next');
  const sliderControl = document.querySelector('.slider__control');
  const sliderWrapper = document.querySelector('.slider__wrapper');

  window.move = {
    onMouseDown: function (evt) {
      let startCoordsX = evt.clientX;
      evt.preventDefault();

      const onMouseMove = function (moveEvt) {
        const shift = startCoordsX - moveEvt.clientX;
        const leftCoordinates = parseInt(pinProgress.style.left, 10) - shift;

        if (leftCoordinates >= window.options.LEFT_RANGE && leftCoordinates <= window.options.RIGHT_RANGE) {
          pinProgress.style.left = leftCoordinates + 'px';
        }

        const percentPerShift = parseInt(pinProgress.style.left, 10) / (sliderControl.clientWidth / 100);

        leftSlide.style.width = sliderWrapper.clientWidth * (100 - percentPerShift) / 100 + 'px';
        rightSlide.style.width = sliderWrapper.clientWidth * percentPerShift / 100 + 'px';

        startCoordsX = moveEvt.clientX;
      };

      const onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },

    onTouchStart: function (evt) {
      let startCoordsX = evt.touches[0].clientX;
      evt.preventDefault();

      const onTouchMove = function (moveEvt) {
        const endCoordsX = moveEvt.touches[0].clientX;
        const shift = startCoordsX - endCoordsX;

        if (endCoordsX >= 20 && endCoordsX <= 300) {
          leftSlide.style.width = leftSlide.clientWidth - shift + 'px';

          rightSlide.style.width = rightSlide.clientWidth + shift + 'px';
        }

        startCoordsX = moveEvt.touches[0].clientX;
      };

      const onTouchEnd = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onTouchMove);
        document.removeEventListener('mouseup', onTouchEnd);
      };

      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    }
  }
})();
