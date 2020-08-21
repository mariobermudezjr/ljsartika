import React from "react";
import { useTheme } from "@zeit-ui/react";

interface IconProps {
  width?: number;
  height?: number;
}

const LinkedIn: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const { width = 17, height = 17, ...others } = props;
  return (
    <svg
      {...others}
      viewBox="0 6 70 64"
      width={width}
      height={height}
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      style={{ color: theme.palette.accents_3 }}
    >
      <path
        data-name="layer1"
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        d="M3.078 22.331h12.188v36.844H3.078z"
        stroke-linejoin="round"
      >
      </path>
      <path
        data-name="layer2"
        d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z"
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      >
      </path>
      <path
        data-name="layer1"
        d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z"
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      >
      </path>
    </svg>
  );
};

export default LinkedIn;
