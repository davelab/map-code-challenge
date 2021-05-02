import React, { useState, useEffect, useRef } from 'react';
import { MapContainer } from './Map.style';

function Map({ options, onMount, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    // The Google Maps API modifies the options object passed to
    // the Map constructor in place by adding a mapTypeId with default
    // value 'roadmap'. { ...options } prevents this by creating a copy.

    const onLoad = () => {
      return setMap(
        new window.google.maps.Map(ref.current, { ...options })
      );
    };

    if (!window.google) {
      const script = document.createElement(`script`);

      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);

      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);

  useEffect(() => {
    if (map && typeof onMount === `function`)
      onMount(map, onMountProps);
  }, [onMountProps]);

  return <MapContainer {...{ ref }} />;
}

// function shouldNotUpdate(props, nextProps) {
//   const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
//   const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
//   const noFuncChange =
//     funcs.length === nextFuncs.length &&
//     funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
//   return noPropChange && noFuncChange
// }

export default Map;

Map.defaultProps = {
  options: {
    center: { lat: 48.8566, lng: 2.3522 },
    zoom: 12,
    disableDefaultUI: true,
  },
};
