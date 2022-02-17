import { Fragment } from "react";
import Image from "next/image";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <Image layout="fill" src="/cover_bg_1.jpg" alt="Charity background" />
        <div className={classes["btn-container"]}>
          <p>Donate with us !</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://razorpay.com/payment-button/pl_Iwh7fdYITWQshI/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
          >
            Donate
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
