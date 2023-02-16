import Image from "next/image";
import React from "react";
import statusBar from "public/images/status-bar.svg";

const StatusBar = () => {
  return (
    <div
      style={{ color: "rgba(255, 255, 255, 1)" }}
      className="absolute h-10 top-0 w-full"
    >
      <Image src={statusBar} alt="status bar" className="mx-auto w-full " />
    </div>
  );
};

export default StatusBar;
