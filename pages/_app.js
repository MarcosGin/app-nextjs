import React from "react";
import App from "next/app";
import { ConfigProvider } from "antd";
import { Router } from "next/router";
import NProgress from "nprogress";

import "../styles/main.scss";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeError", (err, url) => NProgress.done());
Router.events.on("routeChangeComplete", url => NProgress.done());

class Application extends App {
  static async getInitialProps({ Component, ctx }) {
    let initialProps = {};

    if (Component.getInitialProps) {
      initialProps = await Component.getInitialProps(ctx);
    }

    return { initialProps: { ...initialProps } };
  }

  render() {
    const { Component, initialProps } = this.props;

    return (
      <ConfigProvider prefixCls="app">
        <Component {...initialProps} />
      </ConfigProvider>
    );
  }
}

export default Application;
