import React from "react";

const Playlist = ({ items, onClick }) => {
  return (
    <div className="player-playlist">
      {items.map((item, index) => (
        <div className="playlist-item" key={item.id} onClick={() => onClick(index)}>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

Playlist.defaultProps = {
  items: []
};

export default Playlist;
