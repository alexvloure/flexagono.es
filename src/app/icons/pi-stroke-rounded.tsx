import React from "react";

const PiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M3 9.3C3 7.5 5.06126 5.7 7.68468 5.7L16.9574 5.7C19.2 5.7 21 4.35 21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.502 6L15.6072 18.3139C15.5177 19.7653 16.5097 20.9999 17.7654 20.9999C18.6967 20.9999 19.5236 20.3093 19.8181 19.2855L20.1016 18.2999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6C9.86667 9.0625 9.6 14.75 9.2 16.5C8.8 18.25 8 20 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default PiIcon;
