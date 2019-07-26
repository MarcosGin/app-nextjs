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
          <small>{date}</small>
        </span>
      </p>
      <h2 className="e-hero-card-title">{title}</h2>
    </div>
  );
}

export default TextContainer;
