import React from "react";
import s from "./CreationCards.module.scss";

type Props = {
  title: String;
  image: String;
};

export const CreationCards = ({ title, image }: Props) => {
  return (
    <div>
      <img src={`desktop/${image}`} />
      <div>{title}</div>
    </div>
  );
};
