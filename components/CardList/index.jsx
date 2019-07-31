import React from "react";
import { Col } from "antd";
import Card from "../Card";

function CardList({ data, type, responsive }) {
  return data.map(item => (
    <Col {...responsive[type]} className="app-card-container">
      <Card {...item} type={type} />
    </Col>
  ));
}

CardList.defaultProps = {
  type: "standard",
  responsive: {
    standard: { lg: 8 },
    hero: { sm: 24, md: 24, lg: 12 },
    highlight: { sm: 24, md: 24, lg: 12 }
  }
};
export default CardList;
