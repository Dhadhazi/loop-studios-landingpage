import React from "react";
import s from "./NavBar.module.scss";
import { MenuElements } from "../../CONTENT";

export const NavBar = () => {
  const [version, setVersion] = React.useState("desktop");
  const [overlayMenu, setOverlayMenu] = React.useState("none");

  React.useEffect(() => {
    setVersion(window.innerWidth <= 850 ? "mobile" : "desktop");
  }, []);

  if (version === "desktop") {
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
  } else {
    return (
      <div className={s.mobileContainer}>
        <div className={s.overlayBackground} style={{ display: overlayMenu }}>
          <div className={s.overlayLogoAndClose}>
            <div className={s.companyLogo}>loopstudios</div>
            <img
              src="icon-close.svg"
              width="40px"
              height="40px"
              onClick={() => setOverlayMenu("none")}
            />
          </div>
          <div className={s.overlayMenubar}>
            <ul>
              {MenuElements.map((menu) => (
                <li key={menu}>
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.companyLogo}>loopstudios</div>
        <div className={s.mobileMenubar}>
          <img
            src="icon-hamburger.svg"
            width="50px"
            height="35px"
            onClick={() => setOverlayMenu("")}
          />
        </div>
      </div>
    );
  }
};
