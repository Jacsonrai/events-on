import React, { useEffect, useState } from "react";
// interface PositionType {
//   lat: number;
//   long: number;
// }
export const useGeoLocation = () => {
  const [error, setError] = useState<string>("");
  const [position, setPosition] = useState<number[] | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  function getPosition() {
    if (!navigator.geolocation) {
      return setError("Geolocation is not supported by the browser");
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        setIsLoading(false);
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        setPosition([latitude, longitude]);
      },
      (error: GeolocationPositionError) => {
        setIsLoading(false);
        setError(error.message);
      }
    );
  }
  useEffect(() => {
    getPosition();
  }, []);
  return {
    isloading,
    position,
    error,
  };
};
