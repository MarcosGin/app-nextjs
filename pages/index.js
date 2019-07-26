import React from "react";
import axios from "axios";
import BaseLayout from "../templates/layouts/BaseLayout";
import MainPosts from "../components/MainPosts";

class Index extends React.Component {
  static async getInitialProps() {
    const mainPosts = await axios.get("http://localhost:3000/api/posts/main");
    return {
      mainPosts: mainPosts.data
    };
  }

  constructor(props) {
    super(props);
  }
  /* Check for what is customHTML*/
  render() {
    return (
      <BaseLayout {...this.props}>
        <MainPosts posts={this.props.mainPosts} />
      </BaseLayout>
    );
  }
}

export default Index;
