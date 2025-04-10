import React, { useEffect, useRef } from "react";

const YandexMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (window.ymaps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.type = "text/javascript";
      script.onload = initMap;
      document.body.appendChild(script);
    }

    function initMap() {
      window.ymaps.ready(() => {
        if (mapInstanceRef.current) return;

        mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
          center: [54.750556, 56.0025],
          zoom: 17,
          controls: [],
        });

        const placemark = new window.ymaps.Placemark(
          [54.750556, 56.0025],
          {
            balloonContent: "улица Менделеева, 219",
          },
          {
            preset: "islands#redDotIcon",
          },
        );

        mapInstanceRef.current.geoObjects.add(placemark);
      });
    }
  }, []);

  return <div ref={mapRef} className="yandex-map" />;
};

export default YandexMap;
