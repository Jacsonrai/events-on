import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { LatLngExpression } from "leaflet";

interface MapLayoutProps {
  zoom?: number;
  position: LatLngExpression;
}

const MapLayout = (props: MapLayoutProps) => {
  return (
    <>
      <MapContainer
        style={{ height: "100%" }}
        center={props.position as LatLngExpression}
        zoom={props.zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={props.position as LatLngExpression}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapLayout;
