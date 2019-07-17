import React from "react";
import { withRouter } from "next/router";
import axios from "axios";

import BaseLayout from "../../templates/layouts/BaseLayout";
import SectionPosts from "../../components/SectionPosts";

class Section extends React.Component {
  static async getInitialProps({ query }) {
    const { section } = query;
    const sectionData = await axios.get(`http://localhost:3000/api/${section}`);
    return {
      sectionData: sectionData.data
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout {...this.props}>
        <div className="section ">
          <SectionPosts {...this.props.sectionData} />
        </div>
      </BaseLayout>
    );
  }
}

export default withRouter(Section);
