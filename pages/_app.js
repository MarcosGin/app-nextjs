import React from "react";

import "../styles/main.scss";
import App, { Container } from "next/app";

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
          { text: "Deportes 2", link: "/deportes" }
        ]
      },
      subHeader: {
        transmission: {
          type: "live",
          text: "Ahora en vivo",
          value: "El noticiero de la gente",
          link: "/vivo"
        },
        /*
        transmission: {
          type: "nextLive",
          text: "Próximo en vivo",
          value: {
            time: "20:00",
            name: ""
          }
        },
        */
        /*transmission: { today: new Date().toLocaleDateString()},*/

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
        <Component {...initialProps} />
      </Container>
    );
  }
}

export default Application;
