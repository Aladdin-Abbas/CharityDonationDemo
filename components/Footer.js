import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <p>
          Copyright <span>&#169;</span> 2022 Alaa Abbas
        </p>

        <a
          href="https://www.linkedin.com/in/alaa-abbas-8668ab1a4/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/56253_logo_linkedin_icon.png" alt="linkedin" />
        </a>
      </footer>
    </Fragment>
  );
};

export default Footer;
