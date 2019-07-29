import React from "react";
import Link from "next/link";
import ImgContainer from "./ImgContainer";
import TextContainer from "./TextContainer";
import { Col } from "antd";

function Card({ data, type, responsive }) {
  const getComponent = ({ title, thumbnail, section, url, assets = [], date }) => (
    <article className={`app-card ${type}`}>
      <Link href="/[section]/[post]" as={url}>
        <a>
          <ImgContainer thumbnail={thumbnail} assets={assets} />
          <TextContainer title={title} section={section} date={date} />
        </a>
      </Link>
    </article>
  );

  return data.map(item => <Col {...responsive[type]} className="app-card-container">{getComponent(item)}</Col>);
}

Card.defaultProps = {
  type: "standard",
  responsive: {
    standard: { lg: 8 },
    hero: { sm: 24, md: 24, lg: 12 },
    highlight: { sm: 24, md: 24, lg: 12 }
  }
};
export default Card;
