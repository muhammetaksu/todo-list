import Image from "next/image";
import React from "react";
import westeropsLogo from "public/images/westerops-logo.svg";

const Logo = () => {
  return (
    <div className="top-14 absolute left-0 right-0 mx-auto w-40 h-5">
      <Image src={westeropsLogo} alt="logo" />
    </div>
  );
};

export default Logo;
