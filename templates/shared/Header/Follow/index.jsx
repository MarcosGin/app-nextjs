import React from "react";

function Follow(props) {
  const { socials } = props;
  return (
    <div className="b-follow-us">
      {socials.map((social, key) => {
        return (
          <a key={key} href={social.value} target="_blank" className={`e-follow-us-${social.type}`}>
            <i className={`icon-${social.type}`} />
          </a>
        );
      })}
    </div>
  );
}

export default Follow;
