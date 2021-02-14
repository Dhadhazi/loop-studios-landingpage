import React from "react";
import s from "./CreationCards.module.scss";

type Props = {
  title: String;
  image: String;
};

export const CreationCards = ({ title, image }: Props) => {
  const [version, setVersion] = React.useState("desktop");

  React.useLayoutEffect(() => {
    setVersion(window.innerWidth <= 850 ? "mobile" : "desktop");
  }, []);

  return (
    <div className={s.container}>
      <img src={`${version}/${image}`} className={s.image} />
      <div className={s.titleContainer}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
