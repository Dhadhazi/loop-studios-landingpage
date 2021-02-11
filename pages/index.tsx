import { InfoCard } from "../components/InfoCard/InfoCard";
import { Layout } from "../components/Layout/Layout";
import { NavBar } from "../components/NavBar/NavBar";
import { OurCreations } from "../components/OurCreations/OurCreations";
import s from "../styles/Home.module.scss";

const DATA_INFOCARD = {
  title: "The leader in interactive VR",
  desciption:
    "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.",
  image: "image-interactive.jpg",
};

export default function Home() {
  return (
    <Layout>
      <div className={s.headerContainer}>
        <div className={s.headerContent}>
          <NavBar />
          <div className={s.slogan}>
            IMMERSIVE <br />
            EXPERIENCES <br />
            THAT DELIVER
          </div>
        </div>
      </div>
      <div className={s.contentContainer}>
        <InfoCard
          title={DATA_INFOCARD.title}
          image={DATA_INFOCARD.image}
          description={DATA_INFOCARD.desciption}
        />
        <OurCreations />
      </div>
    </Layout>
  );
}
