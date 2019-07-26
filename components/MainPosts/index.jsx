import React from "react";
import { Row, Col } from "antd";
import Card from "../Card";

class MainPosts extends React.Component {
  renderHeroCard() {
    return this.props.posts.hero.map((post, key) => {
      return (
        <Col key={key} sm={24} md={24} lg={12}>
          <Card {...post} type="hero" />
        </Col>
      );
    });
  }

  renderHighlightCard() {
    return (
      <Col sm={24} md={24} lg={12}>
        {this.props.posts.highlights.top.map((post, key) => {
          return <Card {...post} type="highlight" key={key} />;
        })}
      </Col>
    );
  }

  renderStandardCard() {
    return this.props.posts.highlights.bottom.map((post, key) => {
      return (
        <Col key={key} lg={8}>
          <Card {...post} />
        </Col>
      );
    });
  }

  render() {
    return (
      <section className="mainPosts">
        <div className="container">
          <Row gutter={16}>
            {this.renderHeroCard()}
            {this.renderHighlightCard()}
            {this.renderStandardCard()}
          </Row>
        </div>
      </section>
    );
  }
}

export default MainPosts;
