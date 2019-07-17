import React from "react";
import Header from "../shared/Header";

const BaseLayout = props => {
  const { children, header } = props;
  return (
    <div className="main_wrapper">
      <Header {...header} />
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
