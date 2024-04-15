import * as React from "react";
import type { SVGProps } from "react";
const SvgTreeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    {...props}
  >
    <g clipPath="url(#logo-tree-icon_svg__a)">
      <path
        fill="#E8EDDF"
        d="m20.157 16.793-3.26-3.956h1.25a.924.924 0 0 0 .848-.57 1.018 1.018 0 0 0-.134-1.052l-3.187-3.973h1.178a.924.924 0 0 0 .852-.595 1.026 1.026 0 0 0-.173-1.052L13.03.46a.64.64 0 0 0-.95 0l-4.5 5.135a1.026 1.026 0 0 0-.173 1.052c.145.361.48.595.851.595h1.179L6.25 11.216a1.02 1.02 0 0 0-.133 1.05c.155.353.48.571.847.571h1.25l-3.26 3.956a1.02 1.02 0 0 0-.145 1.06c.153.352.49.58.858.58h5.583V19.5l-1.236 2.116c-.217.465.1 1.012.584 1.012h3.915c.486 0 .801-.547.584-1.012L13.861 19.5v-1.069h5.584a.944.944 0 0 0 .858-.579 1.02 1.02 0 0 0-.146-1.06Z"
      />
    </g>
    <defs>
      <clipPath id="logo-tree-icon_svg__a">
        <path fill={props.color} d="M.245.248h22.381V22.63H.245z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTreeIcon;
