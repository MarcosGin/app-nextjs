import React from "react";
import axios from "axios";
import BaseLayout from "../templates/layouts/BaseLayout";
import SectionCard from "../components/SectionCard";
import Player from "../components/Player";

class Index extends React.Component {
  static async getInitialProps() {
    const { data: sectionsData } = await axios.get("http://localhost:3000/api/sections/home");
    return {
      sectionsData
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout {...this.props} title="Home">
        {this.props.sectionsData.map(section => {
          return <SectionCard {...section} key={section.id} />;
        })}

        <section>
          <div className="container">
            <Player
              sources={[
                {
                  src:
                    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
                  type: "application/x-mpegURL"
                }
              ]}
            />
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default Index;
