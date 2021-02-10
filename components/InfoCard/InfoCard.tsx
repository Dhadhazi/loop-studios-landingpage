import React from "react";
import s from "./InfoCard.module.scss";

type Props = {
  image: String;
  title: String;
  description: String;
};

export const InfoCard = ({ image, title, description }: Props) => {
  return (
    <div className={s.container}>
      <img src={`desktop/${image}`} className={s.image} />
      <div className={s.contentContainer}>
        <header>{title.toUpperCase()}</header>
        <article>{description}</article>
      </div>
    </div>
  );
};
