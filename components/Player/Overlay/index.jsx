import React from "react";
import classNames from "classnames";
import * as config from "../config";
import { Icon } from "antd";

const Overlay = ({ status, onPlay, onPause }) => {
  console.log(status);
  if (!status) return null;

  const onClick = () => {
    switch (status) {
      case config.STATUS_READY:
      case config.STATUS_PAUSE:
        onPlay();
        break;

      case config.STATUS_PLAYING:
        onPause();
        break;
    }
  };

  const showContent = () => {
    switch (status) {
      case config.STATUS_READY:
      case config.STATUS_PAUSE:
        return <Icon type="play-circle" />;

      case config.STATUS_LOADING:
      case config.STATUS_WAITING:
        return <Icon type="loading" />;
    }
  };

  const csOverlayContent = classNames("player-overlay", {
    active: status !== config.STATUS_PLAYING
  });

  return (
    <div className={csOverlayContent} onClick={onClick}>
      <div className={`player-overlay-content ${status}`}>{showContent()}</div>
    </div>
  );
};

Overlay.defaultProps = {
  onPlay: () => {},
  onPause: () => {},
  status: null
};

export default Overlay;
