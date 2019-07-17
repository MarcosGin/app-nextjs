import React from "react";

function Hero(props) {
  const { title, thumbnail, section, date, url, assets = [] } = props.data;
  /* Two or more images for show icon gallery*/
  const showImages = assets.images && assets.images.length > 1;
  /* One or more videos for show icon play video*/
  const showVideos = assets.videos && assets.videos.length > 0;
  let firstVideoDuration;
  if (showVideos) {
    firstVideoDuration = assets.videos[0].duration;
  }

  return (
    <article className="b-hero-card m-hero-card-gridView-medium-up m-push-sidebar">
      <a className={`e-hero-card-link ${section}`} href={url}>
        <div className="e-hero-card-img-container">
          <img className="e-hero-card-img" src={thumbnail} alt="" />

          <div className="b-multimedia-assets">
            {showImages && (
              <span className="e-card-photoGallery">
                <i className="icon-photo_library" />
              </span>
            )}
            {showVideos && (
              <span className="e-card-video">
                <i className="icon-play_arrow" />
                <small className="e-card-video-duration">{firstVideoDuration}</small>
              </span>
            )}
          </div>
        </div>

        <div className="b-hero-card-text-wrapper">
          <p className="b-card-misc">
            <span className="e-card-section">{section}</span>
            <span className="e-card-time">
              <i className="icon-clock" />
              &nbsp;
              <time className="timeago">{date}</time>
            </span>
          </p>
          <h2 className="e-hero-card-title">{title}</h2>
        </div>
      </a>
    </article>
  );
}
export default Hero;
