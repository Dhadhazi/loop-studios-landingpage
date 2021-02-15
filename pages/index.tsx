import { InfoCard } from "../components/InfoCard/InfoCard";
import { Layout } from "../components/Layout/Layout";
import { NavBar } from "../components/NavBar/NavBar";
import { OurCreations } from "../components/OurCreations/OurCreations";
import { DATA_INFOCARD } from "../CONTENT";
import s from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <>
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
      </>
    </Layout>
  );
}
