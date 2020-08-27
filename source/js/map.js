'use strict';

(function () {
  let getCurrentCenter = function () {
    return window.matchMedia(window.options.MEDIA.desktop).matches ? window.options.WIDE_SHIFT : window.options.CENTER
  };

  let getCurrentPinSize = function () {
    return window.matchMedia(window.options.MEDIA.mobile).matches ? window.options.PIN_SIZE.small : window.options.PIN_SIZE.big
  };

  let getCurrentPinOffset = function () {
    return window.matchMedia(window.options.MEDIA.mobile).matches ? window.options.PIN_OFFSET.small : window.options.PIN_OFFSET.big
  }

  let initMap = function () {
    let myMap = new ymaps.Map("map", {
      center: getCurrentCenter(),
      zoom: window.options.ZOOM
    }),
    customPin = new ymaps.Placemark(window.options.CENTER, {
      hintContent: 'Наше местоположение',
      balloonContent: 'Большая конюшенная'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: getCurrentPinSize(),
      iconImageOffset: getCurrentPinOffset()
    });

    myMap.geoObjects.add(customPin);
  };

  window.map = {
    createMap: function () {
      ymaps.ready(initMap);
    }
  }
})();
