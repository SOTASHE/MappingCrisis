import React, { useRef, useEffect, useState } from "react";
import "./app.css";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { Room } from "@material-ui/icons";

import axios from "axios";

import { format } from "timeago.js";

import Register from "./components/Register";
import Login from "./components/Login";
import Loader from "./components/Loader";

export default function App() {
  const [crisis, setCrisis] = useState([]);
  const [loading, setLoading] = useState(false);

  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );

  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const [newPlace, setNewPlace] = useState(null);

  const [tag, setTag] = useState(null);
  const [desc, setDesc] = useState(null);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -29.8578,
    longitude: 31.0342,

    zoom: 3.5,
  });

  const [showPopup, setShowPopup] = React.useState(true);

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const getCrisis = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/crisis");
        setCrisis(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    getCrisis();
  }, []);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCrisis = {
      username: currentUsername,
      tag,
      desc,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("/crisis", newCrisis);
      setCrisis([...crisis, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };
  return (
    <>
      <div>
        {!loading ? (
          <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken="pk.eyJ1Ijoic25heWUtc290YXNoZSIsImEiOiJjbDA2MHN4dTEwYzR5M2pubmk0Mmo2aDk3In0.LxXpxLF9MffWbjrL-_ZJLA"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapStyle="mapbox://styles/snaye-sotashe/cl06q57at000315p3hc5r7m6o"
            onDblClick={handleAddClick}
            transitionDuration="200"
          >
            {crisis.map((crisis) => (
              <>
                <Marker
                  latitude={crisis.lat}
                  longitude={crisis.long}
                  offsetLeft={-viewport.zoom * 3.5}
                  offsetTop={-viewport.zoom * 7}
                >
                  <Room
                    style={{
                      fontSize: viewport.zoom * 7,
                      color:
                        crisis.username === currentUsername
                          ? "tomato"
                          : "slateblue",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleMarkerClick(crisis._id, crisis.lat, crisis.long)
                    }
                  />
                </Marker>

                {crisis._id === currentPlaceId && (
                  <Popup
                    key={crisis._id}
                    latitude={crisis.lat}
                    longitude={crisis.long}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setCurrentPlaceId(null)}
                    anchor="left"
                  >
                    <div className="card">
                      <label>Crisis Tag</label>
                      <h4 className="place">{crisis.tag}</h4>
                      <label>Description</label>
                      <p className="desc">{crisis.desc}</p>

                      <label>Information</label>
                      <span className="username">
                        Created by <b>{crisis.username}</b>
                      </span>
                      <span className="date">{format(crisis.createdAt)}</span>
                    </div>
                  </Popup>
                )}
              </>
            ))}
            {newPlace && (
              <Popup
                latitude={newPlace.lat}
                longitude={newPlace.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setNewPlace(null)}
                anchor="left"
              >
                <div>
                  <form onSubmit={handleSubmit}>
                    <label>tag</label>
                    <input
                      placeholder="Enter a crisis in area"
                      autoFocus
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea
                      placeholder="Say more about this crisis."
                      onChange={(e) => setDesc(e.target.value)}
                    />

                    <button type="submit" className="submitButton">
                      Report Crisis
                    </button>
                  </form>
                </div>
              </Popup>
            )}

            {currentUsername ? (
              <button className="button logout" onClick={handleLogout}>
                Log out
              </button>
            ) : (
              <div className="buttons">
                <button
                  className="button login"
                  onClick={() => setShowLogin(true)}
                >
                  Log in
                </button>
                <button
                  className="button register"
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </button>
              </div>
            )}
            {showRegister && <Register setShowRegister={setShowRegister} />}
            {showLogin && (
              <Login
                setShowLogin={setShowLogin}
                setCurrentUsername={setCurrentUsername}
                myStorage={myStorage}
              />
            )}
          </ReactMapGL>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
