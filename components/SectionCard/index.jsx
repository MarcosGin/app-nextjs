import React from "react";
import CardList from "../CardList";
import { Row } from "antd";

class SectionCard extends React.Component {
  render() {
    const {
      name,
      posts: { hero, highlights }
    } = this.props;
    return (
      <section className={name}>
        <div className="container">
          <Row gutter={16}>
            {hero && <CardList type="hero" data={hero} />}
            {highlights && highlights.top && <CardList type="highlight" data={highlights.top} />}
            {highlights && highlights.bottom && <CardList data={highlights.bottom} />}
          </Row>
        </div>
      </section>
    );
  }
}

export default SectionCard;
