import React from "react";
import Card from "../Card";
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
            <Card type="hero" data={hero} />
            <Card type="highlight" data={highlights.top} />
            <Card data={highlights.bottom} />
          </Row>
        </div>
      </section>
    );
  }
}

export default MainPosts;
