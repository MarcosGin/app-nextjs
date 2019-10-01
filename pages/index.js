import React from "react";
import axios from "axios";
import BasePage from "@Templates/BasePage";
import Header from "@Components/Organisms/Header";
import ListCard from "@Components/Organisms/ListCard";
import Slider from "@Components/Organisms/Slider";

class Index extends React.Component {
  static async getInitialProps() {
    const { data: page } = await axios.get("http://localhost:3000/api/pages/home");
    return {
      page
    };
  }

  render() {
    return (
      <BasePage page={this.props.page}>
        <Header />
        <Slider
          items={[
            { id: 1, image: "http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg" },
            {
              id: 2,
              image: "http://wowslider.com/sliders/demo-77/data1/images/field175959_1920.jpg"
            }
          ]}
        />
        <ListCard
          items={[
            {
              id: 1,
              title:
                'Piqueteros respondieron a Alberto Fernández: no abandonarán "las calles bajo ningún Gobierno" ',
              thumbnail:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
              url: "",
              tags: ["Gobierno", "Elecciones"],
              date: { day: 27, month: "mar" }
            },
            {
              id: 2,
              title:
                'Piqueteros respondieron a Alberto Fernández: no abandonarán "las calles bajo ningún Gobierno" ',
              thumbnail:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
              url: "",
              tags: ["Gobierno", "Elecciones"],
              date: { day: 27, month: "mar" }
            },
            {
              id: 3,
              title:
                'Piqueteros respondieron a Alberto Fernández: no abandonarán "las calles bajo ningún Gobierno" ',
              thumbnail:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
              url: "",
              tags: ["Gobierno", "Elecciones"],
              date: { day: 27, month: "mar" }
            },
            {
              id: 4,
              title:
                'Piqueteros respondieron a Alberto Fernández: no abandonarán "las calles bajo ningún Gobierno" ',
              thumbnail:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
              url: "",
              tags: ["Gobierno", "Elecciones"],
              date: { day: 27, month: "mar" }
            }
          ]}
        />
      </BasePage>
    );
  }
}

export default Index;
