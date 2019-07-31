import React from "react";
import CardList from "../CardList";
import { Row } from "antd";

class MainPosts extends React.Component {
  render() {
    const {
      posts: { hero, highlights }
    } = this.props;
    return (
      <section className="mainPosts">
        <div className="container">
          <Row gutter={16}>
            <CardList type="hero" data={hero} />
            <CardList type="highlight" data={highlights.top} />
            <CardList data={highlights.bottom} />
          </Row>
        </div>
      </section>
    );
  }
}

export default MainPosts;
