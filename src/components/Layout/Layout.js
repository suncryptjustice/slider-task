import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = React.memo((props) => {
  const { homeBtnWasClicked } = props;
  return (
    <div className="Layout">
      <Header homeBtnWasClicked={homeBtnWasClicked} />
      {props.children}
      <Footer />
    </div>
  );
});

export default Layout;
