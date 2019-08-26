import React from "react";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-selector-quality-hls";

class Player extends React.Component {
  componentDidMount() {
    this.loadPlayer();
    this.handleEvents();
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.selectorQuality().dispose();
      this.player.dispose();
    }
  }

  loadPlayer() {
    const { ads, sources, options, controlBarOrder } = this.props;
    this.player = videojs(
      this.videoNode,
      {
        sources,
        ...options,
        controlBar: { children: controlBarOrder }
      },
      function onPlayerReady() {
        this.selectorQuality();
      }
    );
  }

  render() {
    return (
      <div className="player-container">
        <div className="player-overlay"></div>
        <div data-vjs-player>
          <video ref={node => (this.videoNode = node)} className="video-js vjs-default-skin" />
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
