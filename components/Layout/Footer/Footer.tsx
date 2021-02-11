import React from "react";
import { Menu } from "../../shared/Menu/Menu";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.postitionerContainer}>
        <div className={s.contentContainer}>
          <div className={s.logoMenuContainer}>
            <h2>loopstudios</h2>
            <Menu />
          </div>
          <div className={s.socialContainer}>
            <div>SOCIAL ICONS</div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
