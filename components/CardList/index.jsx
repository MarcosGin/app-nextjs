import React from "react";
import { Col } from "antd";
import Card from "../Card";

function CardList({ items, type, viewStyle, responsive }) {
  let showImgContainer = type === "standard" && viewStyle === "custom";
  return items.map(item => (
    <Col {...responsive[type]} className={`app-card-container ${viewStyle}`} key={item.id}>
      <Card {...item} type={type} showImgContainer={!showImgContainer} />
    </Col>
  ));
}

CardList.defaultProps = {
  items: [],
  type: "standard",
  viewStyle: "",
  responsive: {
    standard: { lg: 8 },
    hero: { sm: 24, md: 24, lg: 12 },
    highlight: { sm: 24, md: 24, lg: 12 }
  }
};
export default CardList;
