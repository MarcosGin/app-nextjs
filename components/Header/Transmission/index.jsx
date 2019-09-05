import React from "react";
import { Tag, Icon } from "antd";
import classNames from "classnames";

function Transmission(props) {
  const { data } = props;

  if (typeof data.type === "undefined" && !data.type) {
    return (
      <div className="app-transmission">
        <div className="app-transmission-text">{data.value.time}</div>
      </div>
    );
  }

  const isLive = data.type === "live";

  const liveClassName = classNames({
    "app-transmission": true,
    reverse: !isLive
  });

  return (
    <div className={liveClassName}>
      <Tag>
        {isLive ? (
          <>
            <Icon type="video-camera" /> <span>{data.text}</span>
          </>
        ) : (
          ` ${data.value.time} hs.`
        )}
      </Tag>
      <div className="app-transmission-text">{isLive ? data.value : data.text}</div>
    </div>
  );
}

export default Transmission;
