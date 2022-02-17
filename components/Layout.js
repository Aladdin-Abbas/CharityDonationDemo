import Header from "../components/Header";
import Footer from "../components/Footer";
import { Fragment } from "react";

const Layout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
