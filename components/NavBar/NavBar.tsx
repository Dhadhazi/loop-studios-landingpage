import React from "react";
import { Menu } from "../shared/Menu/Menu";
import s from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.companyLogo}>loopstudios</div>
      <Menu />
    </div>
  );
};
