import React from "react";
import Link from "next/link";
import ImgContainer from "./ImgContainer";
import TextContainer from "./TextContainer";

function Card(props) {
  const { title, thumbnail, section, date, url, assets = [] } = props;

  return (
    <article className="app-card ">
      <Link href="/[section]/[post]" as={url}>
        <a>
          <ImgContainer thumbnail={thumbnail} assets={assets} />
          <TextContainer title={title} section={section} date={date} />
        </a>
      </Link>
    </article>
  );
}

export default Card;
