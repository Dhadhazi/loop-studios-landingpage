import React from "react";
import s from "./NavBar.module.scss";
import { MenuElements } from "../../CONTENT";

export const NavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.companyLogo}>loopstudios</div>
      <div className={s.menubar}>
        <ul>
          {MenuElements.map((menu) => (
            <li key={menu}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
