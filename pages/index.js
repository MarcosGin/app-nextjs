import React from "react";
import BaseLayout from "../templates/layouts/BaseLayout";
import MainPosts from "../components/MainPosts";

class Index extends React.Component {
  static async getInitialProps() {
    return {
      mainPosts: {
        hero: [
          {
            title: "El superávit fiscal fue de 30.221 millones de pesos en el primer semestre",
            thumbnail:
              "https://telefe-static2.akamaized.net/media/180322/dujovne.jpg?v=20190712123544000&format=main&width=640&height=360&mode=crop",
            section: "Economía",
            date: "2018-12-07 10:50:30",
            assets: {
              videos: [
                { url: "onevideo", duration: "01:40" },
                { url: "twovideo", duration: "04:50" }
              ]
            },
            url:
              "https://telefenoticias.com.ar/actualidad/volvieron-a-detener-al-hombre-que-asesino-al-taxista/"
          }
        ],
        highlights: {
          top: [
            {
              title: "Cambio climático: Buenos Aires tendrá tempraturas similares a Sidney",
              thumbnail:
                "https://telefe-static2.akamaized.net/media/180343/bairescalor.jpg?v=20190712134602000&format=large&width=460&height=259&mode=crop",
              section: "Actualidad",
              date: "2018-12-07 15:20:40",
              type: ""
            },
            {
              title: "Cambio climático: Buenos Aires tendrá tempraturas similares a Sidney",
              thumbnail:
                "https://telefe-static2.akamaized.net/media/180343/bairescalor.jpg?v=20190712134602000&format=large&width=460&height=259&mode=crop",
              section: "Actualidad",
              date: "2018-12-07 15:20:40",
              type: ""
            },
            {
              title: "Cambio climático: Buenos Aires tendrá tempraturas similares a Sidney",
              thumbnail:
                "https://telefe-static2.akamaized.net/media/180343/bairescalor.jpg?v=20190712134602000&format=large&width=460&height=259&mode=crop",
              section: "Actualidad",
              date: "2018-12-07 15:20:40",
              type: ""
            }
          ],
          bottom: [
            {
              title: "Golpe de nostalgia: cerró la fábrica de la golosina 'Mielcitas' ",
              thumbnail:
                "https://telefe-static2.akamaized.net/media/180322/dujovne.jpg?v=20190712123544000&format=main&width=640&height=360&mode=crop",
              section: "Actualidad",
              date: "2018-12-07 15:10:30",
              type: ""
            },
            {
              title: "Golpe de nostalgia: cerró la fábrica de la golosina 'Mielcitas' ",
              thumbnail:
                "https://telefe-static2.akamaized.net/media/180322/dujovne.jpg?v=20190712123544000&format=main&width=640&height=360&mode=crop",
              section: "Actualidad",
              date: "2018-12-07 15:10:30",
              type: ""
            }
          ]
        }
      }
    };
  }

  constructor(props) {
    super(props);
  }
  /* Check for what is customHTML*/
  render() {
    return (
      <BaseLayout {...this.props}>
        <section className="custom-html">
          <div className="wrapper m-push-sidebar" />
        </section>
        <MainPosts posts={this.props.mainPosts} />
      </BaseLayout>
    );
  }
}

export default Index;
