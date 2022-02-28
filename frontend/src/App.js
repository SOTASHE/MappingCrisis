import React, { useRef, useEffect, useState } from "react";

import ReactMapGL, { Marker } from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -29.8578,
    longitude: 31.0342,
    zoom: 4,
  });
  return (
    <div>
      <h2>Durban!</h2>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic25heWUtc290YXNoZSIsImEiOiJjbDA2MHN4dTEwYzR5M2pubmk0Mmo2aDk3In0.LxXpxLF9MffWbjrL-_ZJLA"
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          latitude={-29.92013}
          longitude={30.95422}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>Fire </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
