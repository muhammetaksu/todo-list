import React from "react";

type Props = {};

const EllipseSelected = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.25"
        fill="white"
        stroke="#FF7900"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="5.5" fill="#FF7900" stroke="#FF7900" />
    </svg>
  );
};

export default EllipseSelected;
