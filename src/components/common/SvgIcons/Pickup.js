import React from 'react';
import { SVGIconWrapper } from './SvgIcons.style';

const statusMap = {
  default: {
    background: '#F0F3F7',
    foreground: '#8596A6',
  },
  error: {
    background: '#FF465C',
    foreground: '#FFFFFF',
  },
  valid: {
    background: '#FFB11F',
    foreground: '#FFFFFF',
  },
};

export default function Pickup({ status }) {
  return (
    <SVGIconWrapper>
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
      >
        <circle
          fill={statusMap[status].background}
          cx="16"
          cy="16"
          r="16"
        ></circle>
        <g transform="translate(4, 4)">
          <path
            d="M21,13 L21,19.0833333 C21,19.5895944 20.5895944,20 20.0833333,20 L4.06944444,20 C3.47880659,20 3,19.5211934 3,18.9305556 L3,13 L2,13 L2,11 L3,6.99998749 L21,6.99998749 L22,11 L22,13 L21,13 Z M3.22916667,4 L20.7708333,4 L20.7708333,4 C20.8973986,4 21,4.10260141 21,4.22916667 L21,6 L3,6 L3,4.22916667 L3,4.22916667 C3,4.10260141 3.10260141,4 3.22916667,4 L3.22916667,4 Z M5.25,14 C5.11192881,14 5,14.1119288 5,14.25 L5,17.75 C5,17.8880712 5.11192881,18 5.25,18 L11.75,18 C11.8880712,18 12,17.8880712 12,17.75 L12,14.25 C12,14.1119288 11.8880712,14 11.75,14 L5.25,14 Z M14.2291667,14 C14.1026014,14 14,14.1026014 14,14.2291667 L14,20 L18,20 L18,14.2291667 C18,14.1026014 17.8973986,14 17.7708333,14 L14.2291667,14 Z"
            fill={statusMap[status].foreground}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </SVGIconWrapper>
  );
}

Pickup.defaultProps = {
  status: 'default',
};
