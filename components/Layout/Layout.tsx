import React, { ReactChildren } from "react";
import Head from "next/head";
import s from "./Layout.module.css";

type Props = {
  children: ReactChildren;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={s.container}>
      <Head>
        <title>loopstudios</title>
        <link rel="favicon-32x32.png" />
      </Head>
      <main>{children}</main>
    </div>
  );
};
