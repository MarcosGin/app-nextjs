import React from "react";
import { Row } from "antd";
import CardList from "../CardList";

function SectionCard({ name, sectionType, posts: { hero, highlights } }) {
  return (
    <section className={name}>
      <div className="container">
        <Row>
          {hero && <CardList type="hero" items={hero} viewStyle={sectionType} />}
          {highlights && highlights.top && (
            <CardList type="highlight" items={highlights.top} viewStyle={sectionType} />
          )}
          {highlights && highlights.bottom && (
            <CardList items={highlights.bottom} viewStyle={sectionType} />
          )}
        </Row>
      </div>
    </section>
  );
}

export default SectionCard;
