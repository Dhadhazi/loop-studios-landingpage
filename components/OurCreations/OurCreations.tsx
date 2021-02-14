import React from "react";
import { CreationCards } from "./components/CreationCards";
import s from "./OurCreations.module.scss";
import { DATA_CARDS } from "../../CONTENT";

export const OurCreations = () => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <header>OUR CREATIONS</header>
        <button>SEE ALL</button>
      </div>
      <div className={s.cardsContainer}>
        {DATA_CARDS.map((data) => (
          <CreationCards
            title={data.title}
            image={data.image}
            key={data.title}
          />
        ))}
      </div>
      <div className={s.mobileSeeAllButton}>
        <button>SEE ALL</button>
      </div>
    </div>
  );
};
