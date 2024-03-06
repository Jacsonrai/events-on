import React, { FC } from "react";
interface LoginIconProps {
  width: number;
  height: number;
}

const LoginIcon: FC<LoginIconProps> = ({ width, height }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 379 511.54"
        width={width}
        height={height}
      >
        <path
          fill-rule="nonzero"
          d="M107.83 0h194.21c21.17 0 40.41 8.68 54.34 22.61C370.33 36.56 379 55.82 379 76.96v357.62c0 21.06-8.69 40.29-22.63 54.26l-.1.1c-13.97 13.93-33.19 22.6-54.23 22.6H107.83c-21.15 0-40.41-8.67-54.36-22.62-13.93-13.93-22.61-33.17-22.61-54.34V360.6h37.55v73.98c0 10.81 4.45 20.67 11.59 27.81 7.15 7.15 17.02 11.6 27.83 11.6h194.21c10.83 0 20.7-4.43 27.8-11.54 7.18-7.17 11.61-17.04 11.61-27.87V76.96c0-10.8-4.45-20.67-11.6-27.82-7.13-7.14-17-11.59-27.81-11.59H107.83c-10.84 0-20.7 4.44-27.84 11.58-7.14 7.13-11.58 17-11.58 27.83v73.96H30.86V76.96c0-21.17 8.66-40.42 22.6-54.36C67.4 8.66 86.65 0 107.83 0zm59.06 161.72 97.02 91.6-101.77 96.42-25.8-27.12 50.94-48.28L0 274.66v-37.39l192.03-.33-50.8-47.96 25.66-27.26z"
        />
      </svg>
    </>
  );
};

export default LoginIcon;
