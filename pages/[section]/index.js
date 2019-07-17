import React from "react";
import BaseLayout from "../../templates/layouts/BaseLayout";

class Section extends React.Component {
  static async getInitialProps() {
    return {};
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout {...this.props}>
        <h1>Section index</h1>
      </BaseLayout>
    );
  }
}

export default Section;
