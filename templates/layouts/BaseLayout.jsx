import React from "react";
import Header from "../shared/Header";

import { Layout } from "antd";

const BaseLayout = props => {
  const { children, header } = props;
  return (
    <>
      <Header {...header} />

      <Layout>{/*  <main>{children}</main> */}</Layout>
    </>
  );
};

export default BaseLayout;
