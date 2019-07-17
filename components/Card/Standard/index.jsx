import React from "react";

function Standard(props) {
  const {
    title,
    thumbnail,
    section,
    date,
    url,
    assets = [],
    showImgContainer = true,
    showSection = true
  } = props.data;
  /* Two or more images for show icon gallery*/
  const showImages = assets.images && assets.images.length > 1;
  /* One or more videos for show icon play video*/
  const showVideos = assets.videos && assets.videos.length > 0;
  let firstVideoDuration;
  if (showVideos) {
    firstVideoDuration = assets.videos[0].duration;
  }

  return (
    <article className="b-card m-card-gridView-medium-up">
      <a className="e-card-link" href={url}>
        {showImgContainer && (
          <div className="e-card-img-container">
            <img className="e-card-img" src={thumbnail} alt="" />

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
        )}

        <div className="b-card-text-wrapper">
          {showSection && (
            <p className="b-card-misc">
              <span className="e-card-section">{section}</span>
              <span className="e-card-time">
                <i className="icon-clock" />
                &nbsp;
                <time className="timeago">{date}</time>
              </span>
            </p>
          )}

          <h2 className="e-card-title">{title}</h2>
        </div>
      </a>
    </article>
  );
}
export default Standard;
