import React from "react";
import Head from "next/head";
import Header from "../shared/Header";

const BaseLayout = ({ children, header, title }) => {
  return (
    <>
      <Head>
        <title>Interior Site - {title}</title>
      </Head>
      <Header {...header} />
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
