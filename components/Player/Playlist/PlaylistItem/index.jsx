import React from "react";

const PlaylistItem = ({ id, title, thumbnail, time, index, onClickItem }) => {
  const onClick = () => onClickItem(index, id);

  return (
    <li className="playlist-item" onClick={onClick}>
      <h4>{title}</h4>
    </li>
  );
};

export default PlaylistItem;
