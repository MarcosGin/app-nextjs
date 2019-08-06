import React from "react";
import Link from "next/link";
import ImgContainer from "./ImgContainer";
import TextContainer from "./TextContainer";

function Card({ title, thumbnail, section, url, assets, date, type, showImgContainer }) {
  return (
    <article className={`app-card ${type}`}>
      <Link href="/[section]/[post]" as={url}>
        <a>
          {showImgContainer && <ImgContainer thumbnail={thumbnail} assets={assets} />}
          <TextContainer title={title} section={section} date={date} />
        </a>
      </Link>
    </article>
  );
}

Card.defaultProps = {
  title: "",
  thumbnail: "",
  section: "",
  url: "",
  assets: [],
  date: "",
  type: "standard"
};

export default Card;
