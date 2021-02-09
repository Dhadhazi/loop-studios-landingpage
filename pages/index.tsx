import { Layout } from "../components/Layout/Layout";
import { NavBar } from "../components/NavBar/NavBar";
import s from "../styles/Home.module.scss";

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
      Yellow world
    </Layout>
  );
}
