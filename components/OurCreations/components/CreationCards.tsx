import React from "react";
import s from "./CreationCards.module.scss";

type Props = {
  title: String;
  image: String;
};

export const CreationCards = ({ title, image }: Props) => {
  return (
    <div className={s.container}>
      <img src={`desktop/${image}`} className={s.image} />
      <div className={s.titleContainer}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
