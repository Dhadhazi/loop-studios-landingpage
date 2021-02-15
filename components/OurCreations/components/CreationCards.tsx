import React from "react";
import s from "./CreationCards.module.scss";

type Props = {
  title: string;
  image: string;
};

export const CreationCards = ({ title, image }: Props) => {
  const [version, setVersion] = React.useState("desktop");

  function splitStringHalfByWord(text: string): string[] {
    let middle = Math.floor(text.length / 2);
    let before = text.lastIndexOf(" ", middle);
    let after = text.indexOf(" ", middle + 1);

    if (middle - before < after - middle || after === -1) {
      middle = before;
    } else {
      middle = after;
    }

    const firstHalf = text.substr(0, middle);
    const secondHalf = text.substr(middle + 1);

    return [firstHalf, secondHalf];
  }

  React.useEffect(() => {
    setVersion(window.innerWidth <= 850 ? "mobile" : "desktop");
  }, []);

  const titleInArray = splitStringHalfByWord(title);

  return (
    <div className={s.container}>
      <img src={`${version}/${image}`} className={s.image} alt={title} />
      <div className={s.titleContainer}>
        <h3>
          {titleInArray[0]}
          <br />
          {titleInArray[1]}
        </h3>
      </div>
    </div>
  );
};
