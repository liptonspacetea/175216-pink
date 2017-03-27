ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 15,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
        position: {top: 14, left: 15}
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
        { iconLayout: 'default#image',
          iconImageHref: './img/icon-map-marker.svg',
          iconImageSize: [35, 35],
          iconImageOffset: [-20, -47] });

    myMap.geoObjects.add(myPlacemark);
}
