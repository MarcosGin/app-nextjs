import React from "react";
import { Icon } from "antd";

function TextContainer(props) {
  const { section, title, date } = props;
  return (
    <div className="app-card-text-container">
      <p className="app-card-text-header">
        <span className="app-card-text-section">{section}</span>
        <span className="app-card-text-time">
          <Icon type="history" />
          <span>{date}</span>
        </span>
      </p>
      <h2 className="app-card-text-title">{title}</h2>
    </div>
  );
}

export default TextContainer;
