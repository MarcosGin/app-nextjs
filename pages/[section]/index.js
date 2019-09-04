import React from "react";
import { withRouter } from "next/router";
import axios from "axios";

import BasePage from "../../templates/layouts/BasePage";

class Section extends React.Component {
  static async getInitialProps({ query }) {
    const { section } = query;
    const { data: page } = await axios.get(`http://localhost:3000/api/section/${section}`);

    return {
      page
    };
  }

  render() {
    return <BasePage page={this.props.page}></BasePage>;
  }
}

export default withRouter(Section);
