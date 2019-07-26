import React from "react";
import Header from "../shared/Header";

const BaseLayout = props => {
  const { children, header } = props;
  return (
    <>
      <Header {...header} />
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
