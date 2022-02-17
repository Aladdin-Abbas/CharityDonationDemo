import { Fragment } from "react";
import Head from "next/head";
import About from "../components/About";

export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="learn more about our non profit organisation"
        />
      </Head>
      <About />
    </Fragment>
  );
}
