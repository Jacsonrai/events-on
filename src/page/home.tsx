import React from "react";
import MapLayout from "../component/map/maplayout";
import useWindowDimensions from "../hooks/useWindowDimension";
const Home = () => {
  const { height } = useWindowDimensions();
  return (
    <div style={{ height: height }}>
      <MapLayout zoom={16} />
    </div>
  );
};

export default Home;
