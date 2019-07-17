import React from "react";

function Transmission(props) {
  const { data } = props;
  switch (data.type) {
    case "live":
      return (
        <div className="b-live-news">
          <p className="e-live-news">
            <a href={data.link}>
              <span>{data.text}</span> {data.value}
            </a>
          </p>
        </div>
      );
    case "nextLive":
      return (
        <div className="b-next-live-news">
          <p className="e-next-live-news">
            <span>
              {data.text}
              <span className="e-next-live-news-hour"> {data.value.time} hs.</span>
            </span>
          </p>
        </div>
      );
    default:
      return (
        <div className="b-next-live-news">
          <p className="e-next-live-news">
            <span className="date">{data.today}</span>
          </p>
        </div>
      );
  }
}

export default Transmission;
