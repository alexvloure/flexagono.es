import React from "react";

const TanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M8.5 17L9.7 13M14.5 17L13.3 13M9.7 13L11.5 7L13.3 13M9.7 13H13.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 7V17L17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 7H4.5M7 7H4.5M4.5 17V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default TanIcon;
