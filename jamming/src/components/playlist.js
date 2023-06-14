import React from "react";
import "../style/playlist.css";
import cb from "../image/cb.jpg";

const Playlist = 
  {
  Name: "chrisBrown",
  Song: "under The Influence",
  Album: "indigo",
  genre: "R&B/Soul",
};

const PlaylistKey= Object.entries(Playlist);
const Details = PlaylistKey.map(([key, value]) => {
  return (
    <div key={key}>{`${key} : ${value}`}</div>
  );
})
const PlaylistSong = () => {
  return (
    <div className="body">
      <div className="card">
        <img src={cb} alt="cb" height="150" width="140" 
        />
        <div>{Details}</div>
          <button className="button">
          <i class='fa fa-play-circle'></i>
          </button>
          <span className="Add-playlist">
          <i class="fa fa-plus"></i>
          </span>
      </div>
    </div>
  );
};
export default PlaylistSong;
