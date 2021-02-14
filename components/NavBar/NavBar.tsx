import React from "react";
import { Menu } from "../shared/Menu/Menu";
import s from "./NavBar.module.scss";

const MenuElements = ["About", "Careers", "Events", "Products", "Support"];

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
