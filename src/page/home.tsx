import React from "react";
import MapLayout from "../component/map/maplayout";
import useWindowDimensions from "../hooks/useWindowDimension";
import LoginIcon from "../component/customicon/loginIcon";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { LatLngExpression } from "leaflet";
import EVNavBar from "../component/resuable/navbar";
const Home = () => {
  const { height } = useWindowDimensions();
  const { isloading, position } = useGeoLocation();
  return isloading ? (
    <p>is loading</p>
  ) : (
    <div style={{ height: height }} className=" relative">
      <EVNavBar />
      <MapLayout zoom={16} position={position as LatLngExpression} />
    </div>
  );
};

export default Home;
