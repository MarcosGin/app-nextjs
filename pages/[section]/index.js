import React from "react";
import axios from "axios";
import BasePage from "@Templates/BasePage";
import Header from "@Components/Organisms/Header";

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
      </BasePage>
    );
  }
}

export default Index;
