import React from "react";
import { Icon } from "antd";

function ImgContainer(props) {
  const {
    thumbnail,
    assets: { images, videos }
  } = props;
  const showGallery = images && images.length > 1;
  const showPlay = videos && videos.length > 0;
  const firstVideoDuration = showPlay ? videos[0].duration : false;
  return (
    <div className="app-card-img-container">
      <img src={thumbnail} alt="" />

      <div className="app-card-assets">
        {showGallery && (
          <span className="icon-gallery">
            <Icon type="folder" />
          </span>
        )}
        {showPlay && (
          <span className="icon-videos">
            <Icon type="caret-right" />
            <small className="video-duration">{firstVideoDuration}</small>
          </span>
        )}
      </div>
    </div>
  );
}

export default ImgContainer;
