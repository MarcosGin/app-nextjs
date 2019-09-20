import React from "react";
import axios from "axios";
import BasePage from "@Templates/BasePage";
import Header from "@Components/Organisms/Header";
import ListCard from "@Components/Organisms/ListCard";

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
        <ListCard
          items={[
            {
              id: 1,
              title: "This is a title",
              content: "lorem",
              thumbnail:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
              url: ""
            }
          ]}
        />
      </BasePage>
    );
  }
}

export default Index;
