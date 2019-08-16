import React from "react";
import videojs from "video.js";
import "playerQualitySelector";
// import "videojs-contrib-quality-levels"; // register plugin
// import "videojs-hls-quality-selector";

class Player extends React.Component {
  componentDidMount() {
    const { ads, sources, options, controlBarOrder } = this.props;
    this.player = videojs(
      this.videoNode,
      {
        sources,
        ...options,
        controlBar: { children: controlBarOrder }
      },
      function onPlayerReady() {
        this.hlsQualitySelector();
      }
    );
  }

  componentWillUnmount() {
    if (this.player) {
      // this.player.hlsQualitySelector().dispose();
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js vjs-default-skin" />
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
