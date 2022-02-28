import React, { useRef, useEffect, useState } from "react";
import "./app.css";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { Room } from "@material-ui/icons";

import axios from "axios";

import { format } from "timeago.js";

export default function App() {
  const [crisis, setCrisis] = useState([]);

  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -29.8578,
    longitude: 31.0342,

    zoom: 3.5,
  });

  const [showPopup, setShowPopup] = React.useState(true);

  useEffect(() => {
    const getCrisis = async () => {
      try {
        const res = await axios.get("/crisis");
        setCrisis(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getCrisis();
  }, []);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

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
          {crisis.map((crisis) => (
            <>
              <Marker
                latitude={crisis.lat}
                longitude={crisis.long}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <Room
                  style={{ fontSize: viewport.zoom * 7, color: "slateblue" }}
                  onClick={() => handleMarkerClick(crisis._id)}
                />
              </Marker>

              {/* <Marker
            latitude={-29.8578}
            longitude={31.0342}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Room style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
          </Marker> */}

              {crisis._id === currentPlaceId && (
                <Popup
                  latitude={crisis.lat}
                  longitude={crisis.long}
                  anchor="left"
                  onClose={() => setShowPopup(false)}
                >
                  <div className="card">
                    <label> {crisis.tag} </label>
                    <h1 className="crisis"> Fire </h1>
                    <label className="desc"> {crisis.desc} </label>

                    <p> Durban area is on fire</p>
                    <label> Information </label>

                    <span className="username">
                      Reported by <b>{crisis.username}</b>
                    </span>
                    <span className="date"> {format(crisis.createdAt)} </span>
                  </div>
                </Popup>
              )}
            </>
          ))}
        </ReactMapGL>
      </div>
    </>
  );
}
