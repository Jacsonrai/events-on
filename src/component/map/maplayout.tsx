import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { CustomIcon } from "./customicon";

interface MapLayoutProps {
  zoom?: number;
}

const MapLayout = (props: MapLayoutProps) => {
  const { isloading, position } = useGeoLocation();
  // const { legalIcon } = CustomIcon();

  return isloading ? (
    <p>is loading</p>
  ) : (
    <>
      <MapContainer
        style={{ height: "100%" }}
        center={[0, 0]}
        zoom={props.zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapLayout;
