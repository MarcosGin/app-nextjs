import React from "react";
import { Router } from "next/router";
import { ConfigProvider } from "antd";
import PropTypes from "prop-types";
import NProgress from "nprogress";

import Head from "./Head";
import Dynamic from "@Components/Dynamic";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeError", (err, url) => NProgress.done());
Router.events.on("routeChangeComplete", url => NProgress.done());

import "../styles/main.scss";

class BasePage extends React.Component {
  render() {
    const { props = {}, children: childrenFromPage = [] } = this.props.page;
    return (
      <ConfigProvider prefixCls="app">
        <Head {...props.head}></Head>

        <div className="page">
          {childrenFromPage.map((child, index) => {
            return <Dynamic element={child} key={index} />;
          })}
          {this.props.children}
        </div>
      </ConfigProvider>
    );
  }
}

BasePage.propTypes = {
  page: PropTypes.object
};

BasePage.defaultProps = {
  page: {}
};

export default BasePage;
