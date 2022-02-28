import React, { useRef, useEffect, useState } from "react";
import "./app.css";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { Room } from "@material-ui/icons";
import Map from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -29.8578,
    longitude: 31.0342,

    zoom: 3.5,
  });

  const [showPopup, setShowPopup] = React.useState(true);
  return (
    <>
      <div>
        <h2>Durban!</h2>
        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken="pk.eyJ1Ijoic25heWUtc290YXNoZSIsImEiOiJjbDA2MHN4dTEwYzR5M2pubmk0Mmo2aDk3In0.LxXpxLF9MffWbjrL-_ZJLA"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapStyle="mapbox://styles/snaye-sotashe/cl06q57at000315p3hc5r7m6o"
        >
          <Marker
            latitude={-29.8578}
            longitude={31.0342}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Room style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
          </Marker>
          {/* {showPopup && (
            <Popup
              latitude={-29.8578}
              longitude={31.0342}
              anchor="left"
              onClose={() => setShowPopup(false)}
            >
              <div className="card">
                <label> crisis tag </label>
                <h1 className="crisis"> Fire </h1>
                <label className="desc"> Description </label>

                <p> Durban area is on fire</p>
                <label> Information </label>

                <span className="username">
                  Reported by <b>Snaye</b>
                </span>
                <span className="date"> 1 hour ago </span>
              </div>
            </Popup>
          )} */}
        </ReactMapGL>
      </div>
    </>
  );
}
