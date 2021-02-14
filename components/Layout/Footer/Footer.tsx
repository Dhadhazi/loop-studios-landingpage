import React from "react";
import { Menu } from "../../shared/Menu/Menu";
import s from "./Footer.module.scss";

const MenuElements = ["About", "Careers", "Events", "Products", "Support"];

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.postitionerContainer}>
        <div className={s.contentContainer}>
          <div className={s.logoMenuContainer}>
            <h2>loopstudios</h2>
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
          <div className={s.socialContainer}>
            <div>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-twitter" />
              <i className="fab fa-pinterest" />
              <i className="fab fa-instagram" />
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
