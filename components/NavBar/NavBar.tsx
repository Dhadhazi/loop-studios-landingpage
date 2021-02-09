import React from "react";
import s from "./NavBar.module.scss";

const MenuElements = ["About", "Careers", "Events", "Products", "Support"];

export const NavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.companyLogo}>loopstudios</div>
      <div className={s.menubar}>
        <ul>
          {MenuElements.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
