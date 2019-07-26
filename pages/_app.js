import React from "react";
import App, { Container } from "next/app";
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
    let pageData = {};

    pageData.header = {
      logo:
        "https://telefe-static2.akamaized.net/media/12531/logo-noticias.svg?v=20180719132831000",
      menu: {
        items: [
          { text: "Política", link: "/politica" },
          { text: "Actualidad", link: "/actualidad" },
          { text: "Internacionales", link: "/internacionales" },
          { text: "Deportes", link: "/deportes" },
          //Maybe this for more items
          { text: "Economía", link: "/economia" },
          { text: "Noticiero de la gente", link: "/noticiero-de-la-gente" },
          { text: "Espectáculos", link: "/espectaculos" },
          { text: "Curiosidades", link: "/curiosidades" },
          { text: "Redes", link: "/redes" },
          { text: "Tecno", link: "/tecno" },
          { text: "MTV news", link: "/mtv-news" }
        ]
      },
      subHeader: {
        transmission: {
          type: "live",
          text: "Ahora en vivo",
          value: "El noticiero de la gente",
          link: "/vivo"
        },

        // transmission: {
        //   type: "nextLive",
        //   text: "Próximo en vivo",
        //   value: {
        //     time: "20:00",
        //     name: ""
        //   }
        // },
        // transmission: { value: { time: "Jueves 2, 13:00hs" } },

        search: true,
        socialLinks: [
          { type: "facebook", value: "http://facebook.com/telefenoticias" },
          { type: "twitter", value: "http://twitter.com/telefenoticias" },
          { type: "youtube", value: "http://youtube.com/telefenoticias" },
          { type: "instagram", value: "http://instagram.com/telefenoticias" },
          { type: "contact", value: "/contacto" }
        ]
      }
    };

    if (Component.getInitialProps) {
      initialProps = await Component.getInitialProps(ctx);
    }

    return { initialProps: { ...initialProps, ...pageData } };
  }

  render() {
    const { Component, initialProps } = this.props;

    return (
      <Container>
        <ConfigProvider prefixCls="app">
          <Component {...initialProps} />
        </ConfigProvider>
      </Container>
    );
  }
}

export default Application;
