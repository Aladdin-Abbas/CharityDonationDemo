import { Fragment } from "react";
import Head from "next/head";
import Main from "../components/Main";

export default function Donation() {
  return (
    <Fragment>
      <Head>
        <title>Charity Donation</title>
        <meta name="description" content="make a donation for charity" />
      </Head>
      <Main />
    </Fragment>
  );
}
