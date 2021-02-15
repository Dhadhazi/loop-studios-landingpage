import React from "react";
import s from "./InfoCard.module.scss";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const InfoCard = ({ image, title, description }: Props) => {
  return (
    <div className={s.container}>
      <img
        src={`desktop/${image}`}
        className={s.image}
        alt={`Image for ${title}`}
      />
      <div className={s.contentContainer}>
        <h1>{title.toUpperCase()}</h1>
        <article>{description}</article>
      </div>
    </div>
  );
};
