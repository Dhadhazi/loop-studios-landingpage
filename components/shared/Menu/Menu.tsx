import React from "react";
import s from "./Menu.module.scss";

const MenuElements = ["About", "Careers", "Events", "Products", "Support"];

export const Menu = () => {
  return (
    <div className={s.menubar}>
      <ul>
        {MenuElements.map((menu) => (
          <li key={menu}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
