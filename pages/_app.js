import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="st5.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
