import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/StatusBar.module.css";
import statusBar from "public/images/status-bar.svg";

const StatusBar = () => {
  return (
    <div className={`${styles.container} absolute h-10 top-0 w-full`}>
      <Image src={statusBar} alt="status bar" className="mx-auto w-full " />
    </div>
  );
};

export default StatusBar;
