// ./map/map.js
import React, { useState, useEffect } from 'react';
import MapContext from './mapContext';
import { Map, View } from 'ol';
import { defaults } from 'ol/control';
import { fromLonLat, get } from 'ol/proj';
import { Tile } from 'ol/layer';
import { OSM, XYZ } from 'ol/source';

const Maps = ({ children }) => {
  const [mapObj, setMapObj] = useState({});

  useEffect(() => {
    const map = new Map({
      controls: defaults({ zoom: false, rotate: false }).extend([]),
      layers: [
        new Tile({
          source: new OSM()
        }),
        new Tile({
          name: 'Base',
          visible: true,
          source: new XYZ({
            url: `http://api.vworld.kr/req/wmts/1.0.0/${process.env.VWORLD_API_KEY}/Base/{z}/{y}/{x}.png`
          })
        })
      ],
      target: 'map',
      view: new View({
        projection: get('EPSG:3857'),
        center: fromLonLat([128.2953203, 34.9671727], get('EPSG:3857')),
        zoom: 12
      })
    })

    setMapObj({ map });

    return () => map.setTarget(undefined);
  }, []);

  // ✨ MapContext.Provider에 객체 저장
  return <MapContext.Provider value={{ mapObj }}>{children}</MapContext.Provider>;
};

export default Maps;