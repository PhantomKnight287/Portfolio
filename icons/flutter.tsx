import * as React from "react";
import type { SVGProps } from "react";
const Flutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 317"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient x1="4%" y1="27%" x2="75.9%" y2="52.9%" id="a">
        <stop offset="0%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="#47C5FB"
      d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"
    />
    <path fill="#00569E" d="m121 280 37 37h97l-85-86z" />
    <path fill="#00B5F8" d="m72 230 48-48 50 49-49 49z" />
    <path fillOpacity={0.8} fill="url(#a)" d="m121 280 41-14 4-31z" />
  </svg>
);
export default Flutter;
