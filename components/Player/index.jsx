import React from "react";
import VideoJSPlayer from "./VideoJS";
import Overlay from "./Overlay";

import * as config from "./config";

class Player extends React.Component {
  state = {
    status: config.STATUS_LOADING
  };

  onLoad = () => {
    this.updateStatus(config.STATUS_LOADING);
  };

  onLoaded = () => {
    this.updateStatus(config.STATUS_READY);
  };

  onPlay = () => {
    this.updateStatus(config.STATUS_PLAYING);
  };

  onPause = () => {
    this.updateStatus(config.STATUS_PAUSE);
  };

  onWaiting = () => {
    this.updateStatus(config.STATUS_WAITING);
  };

  onError = () => {
    this.updateStatus(config.STATUS_ERROR);
  };

  /**
   * Overlay funcionality
   */
  onPlayOverlay = () => {
    this.player.play();
  };
  onPauseOverlay = () => {
    this.player.pause();
  };

  updateStatus = status => this.setState({ status });

  render() {
    return (
      <div className="player-container">
        <Overlay
          status={this.state.status}
          onPlay={this.onPlayOverlay}
          onPause={this.onPauseOverlay}
        />

        <div className="player-video">
          <VideoJSPlayer
            {...this.props}
            onLoad={this.onLoad}
            onLoaded={this.onLoaded}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onWaiting={this.onWaiting}
            onError={this.onError}
            ref={instance => {
              this.player = instance;
            }}
          />
        </div>
      </div>
    );
  }
}

Player.defaultProps = {
  ads: true,
  sources: [],
  options: {
    autoplay: false,
    muted: true,
    fluid: true,
    controls: true
  },
  controlBarOrder: [
    "progressControl",
    "playToggle",
    "volumePanel",
    "currentTimeDisplay",
    "timeDivider",
    "durationDisplay",
    "fullscreenToggle"
  ]
};

export default Player;
