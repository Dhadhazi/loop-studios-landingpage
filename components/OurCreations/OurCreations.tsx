import React from "react";
import { CreationCards } from "./components/CreationCards";
import s from "./OurCreations.module.scss";

const DATA_CARDS = [
  {
    title: "Deep Earth",
    image: "image-deep-earth.jpg",
  },
  {
    title: "Night Arcade",
    image: "image-night-arcade.jpg",
  },
  {
    title: "Soccer team vr",
    image: "image-soccer-team.jpg",
  },
  {
    title: "The grid",
    image: "image-grid.jpg",
  },
  {
    title: "from up above vr",
    image: "image-from-above.jpg",
  },
  {
    title: "pocket borealis",
    image: "image-pocket-borealis.jpg",
  },
  {
    title: "the curiosity",
    image: "image-curiosity.jpg",
  },
  {
    title: "make it fisheye",
    image: "image-fisheye.jpg",
  },
];

export const OurCreations = () => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <header>OUR CREATIONS</header>
        <button>SEE ALL</button>
      </div>
      <div className={s.cardsContainer}>
        {DATA_CARDS.map((data) => (
          <CreationCards title={data.title} image={data.image} />
        ))}
      </div>
    </div>
  );
};
