import React from "react";
import { Icon } from "antd";

function Follow(props) {
  const { socials } = props;

  return (
    <div className="app-follow">
      {socials.map((social, key) => {
        return (
          <a key={key} href={social.value} target="_blank">
            <Icon type={social.type === "contact" ? "mail" : social.type} />
          </a>
        );
      })}
    </div>
  );
}

export default Follow;
