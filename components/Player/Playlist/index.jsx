import React from "react";
import PlaylistItem from "./PlaylistItem";

const Playlist = ({ title, items, onClick }) => {
  return (
    <div className="player-playlist">
      <div className="player-playlist-title">{title}</div>
      <ul>
        {items.map((item, index) => (
          <PlaylistItem key={item.id} {...item} onClickItem={onClick} index={index} />
        ))}
      </ul>
    </div>
  );
};

Playlist.defaultProps = {
  items: []
};

export default Playlist;
