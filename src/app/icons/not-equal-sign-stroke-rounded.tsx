import React from "react";

const NotEqualSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 20L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default NotEqualSignIcon;
