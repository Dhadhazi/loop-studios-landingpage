import React from "react";
import Image from "next/image";
import s from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.companyLogo}>loopstudios</div>
      <div className={s.menubar}>About Careers Events Products Support</div>
    </div>
  );
};
