import React from "react";
import VideoJSPlayer from "./VideoJS";
import Overlay from "./Overlay";
import Playlist from "./Playlist";

import * as config from "./config";

class Player extends React.Component {
  state = {
    status: config.STATUS_LOADING
  };

  componentDidMount() {
    this.player.load(this.props.playlist[0].sources);
  }

  onLoad = () => {
    this.updateStatus(config.STATUS_LOADING);
  };

  onLoaded = () => {
    this.updateStatus(config.STATUS_LOADED);
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

  /**
   * Playlist funcionality
   */

  onClickPlaylistItem = index => {
    this.player.load(this.props.playlist[index].sources);
  };

  updateStatus = status => this.setState({ status });

  render() {
    return (
      <div className="player">
        <div className="player-container">
          <Overlay
            status={this.state.status}
            onPlay={this.onPlayOverlay}
            onPause={this.onPauseOverlay}
          />

          <div className="player-video">
            <VideoJSPlayer
              options={this.props.options}
              controlBarOrder={this.props.controlBarOrder}
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
        <Playlist items={this.props.playlist} onClick={this.onClickPlaylistItem} />
      </div>
    );
  }
}

Player.defaultProps = {
  ads: true,
  playlist: [],
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
