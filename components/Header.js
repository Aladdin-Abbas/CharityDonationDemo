import Link from "next/link";
import { Fragment, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <Fragment>
      <div className={classes["header-top"]}></div>
      <div className={classes["sticky-header"]}>
        <div>
          <p>Charity</p>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div
          className={classes["toggle-nav"]}
          onClick={() => setShowSideNav(previousState => !previousState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {showSideNav && (
        <div className={classes["side-nav"]}>
          <Link href="/">
            <a onClick={() => setShowSideNav(previousState => !previousState)}>
              Home
            </a>
          </Link>

          <Link href="/about">
            <a onClick={() => setShowSideNav(previousState => !previousState)}>
              About
            </a>
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
