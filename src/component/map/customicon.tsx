import React from "react";
import { Icon } from "leaflet";
export const CustomIcon = () => {
  const legalIcon = new Icon({
    iconUrl:
      "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png",
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  return {
    legalIcon,
  };
};
