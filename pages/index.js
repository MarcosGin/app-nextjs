import React from "react";
import axios from "axios";
import BaseLayout from "../templates/layouts/BaseLayout";
import SectionCard from "../components/SectionCard";
import Item from "antd/lib/list/Item";

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
      <BaseLayout {...this.props}>
        {this.props.sectionsData.map(section => {
          return <SectionCard {...section} key={section.id} />;
        })}
      </BaseLayout>
    );
  }
}

export default Index;
