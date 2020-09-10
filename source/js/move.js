'use strict';

(function () {
  const pinProgress = document.querySelector('.slider__progress');
  const sliderControl = document.querySelector('.slider__control');
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const rightSlide = document.querySelector('.slider__slide--next');

  window.move = {
    onMouseDown: function (evt) {
      evt.preventDefault();
      window.util.setDefaultPinPosition();
      let startCoordsX = evt.clientX;

      const onMouseMove = function (moveEvt) {

        const shift = startCoordsX - moveEvt.clientX;

        const leftCoordinates = parseInt(pinProgress.style.left, 10) - shift;
        window.util.setPinPosition(leftCoordinates);

        const percentPerShift = parseInt(pinProgress.style.left, 10) / (sliderControl.clientWidth / 100);
        window.util.setSlidesWidth(percentPerShift);

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
      window.util.setDefaultPinPosition();

      const onTouchMove = function (moveEvt) {
        const endCoordsX = moveEvt.touches[0].clientX;

        const shift = startCoordsX - endCoordsX;
        window.util.setSlidesWidthMobile(endCoordsX, shift);

        const percentPerShift = rightSlide.clientWidth / (sliderWrapper.clientWidth / 100);
        window.util.setPinPositionMobile(percentPerShift);

        startCoordsX = moveEvt.touches[0].clientX;
      };

      const onTouchEnd = function () {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
      };

      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    }
  }
})();
