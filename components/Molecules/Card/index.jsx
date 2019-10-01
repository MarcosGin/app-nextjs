import React from "react";
import { Tag, Icon } from "antd";

const Card = ({ title, thumbnail, description, tags, date, author }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <div className="date">
          <div className="day">{date.day}</div>
          <div className="month">{date.month}</div>
        </div>
        <img src={thumbnail} alt={title} />
      </div>
      <div className="content">
        <div className="tags">
          {tags.map(tag => (
            <Tag color="red" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="information">
          <span className="author">By {author}</span>
          <div className="timestamp">
            <span className="icon">
              <Icon type="history" />{" "}
            </span>
            <span>4 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "",
  description: "",
  thumbnail: "",
  section: "",
  tags: [],
  author: "Chris Brown",
  url: "",
  date: ""
};

export default Card;
