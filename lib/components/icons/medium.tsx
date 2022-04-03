import React from "react";
import { useTheme } from "@zeit-ui/react";

interface IconProps {
  width?: number;
  height?: number;
}

const Medium: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const { width = 24, height = 24, ...others } = props;
  return (

    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    width={width}
    height={height}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: theme.palette.accents_3 }}>
    <circle fill="currentColor" cx="6.00" cy="12" r="6.00"/>
    <ellipse fill="currentColor" cx="15.46" ry="5.7" rx="3" cy="12" />
    <ellipse fill="currentColor" cx="19.82" cy="12" rx="1.056" ry="5.088"/>



  </svg>
  );
};

export default Medium;
