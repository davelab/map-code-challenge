import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Map from './components/Map';
import { getGeocode } from './mockAPI';
import Finder from './components/Finder';
import svgMarkers from './components/Map/svgMarkes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [markers, setMarker] = useState({});

  const onAddressChange = (type, geocode) => {
    setMarker({ ...markers, [type]: geocode });
  };

  const addMarkers = (map, markers) => {
    const markerKeys = Object.keys(markers);

    markerKeys.forEach((type) => {
      new google.maps.Marker({
        position: {
          lat: markers[type].latitude,
          lng: markers[type].longitude,
        },
        icon: svgMarkers[type],
        map: map,
      });
    });
  };

  return (
    <>
      <Finder {...{ onAddressChange }} />
      <Map onMount={addMarkers} onMountProps={markers} />
      <ToastContainer autoClose={5000} />
    </>
  );
};

export default App;
