import React from "react";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-selector-quality-hls";

class VideoJSPlayer extends React.Component {
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
    const { sources, options, controlBarOrder } = this.props;
    this.player = videojs(this.videoNode, {
      sources,
      ...options,
      controlBar: { children: controlBarOrder }
    });
  }

  handleEvents() {
    this.player.ready(this.onReady);
    const events = [
      { type: "loadstart", cb: this.props.onLoad },
      { type: "loadeddata", cb: this.props.onLoaded },
      { type: "play", cb: this.props.onPlay },
      { type: "playing", cb: this.props.onPlay },
      { type: "pause", cb: this.props.onPause },
      { type: "progress", cb: this.props.onProgress },
      { type: "seeking", cb: this.props.onSeek },
      { type: "seeked", cb: this.props.onSeeked },
      { type: "timeupdate", cb: this.props.onTimeUpdate },
      { type: "suspend", cb: this.props.onStop },
      { type: "waiting", cb: this.props.onWaiting },
      { type: "ended", cb: this.props.onComplete },
      { type: "volumechange", cb: this.onVolumeChange },
      { type: "error", cb: this.props.onError }
    ];

    events.map(({ type, cb }) => this.player.on(type, cb));
  }

  onReady = () => {
    this.props.onReady();
    this.player.selectorQuality();
  };
  onVolumeChange = () => {};

  /**
   * Player funcionality
   */
  load = video => {
    this.player.src(video);
  };

  play = () => {
    this.player.play();
  };

  pause = () => {
    this.player.pause();
  };

  seek = position => {
    this.player.currentTime(position);
  };

  render() {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js vjs-default-skin" />
      </div>
    );
  }
}

VideoJSPlayer.defaultProps = {
  onReady: () => {},
  onLoad: () => {},
  onLoaded: () => {},
  onPlay: () => {},
  onPause: () => {},
  onProgress: () => {},
  onSeek: () => {},
  onSeeked: () => {},
  onTimeUpdate: () => {},
  onStop: () => {},
  onWaiting: () => {},
  onComplete: () => {},
  onError: () => {}
};

export default VideoJSPlayer;
