import "./App.css";
import PlaylistSong from "./components/playlist";
import SearchBar from "./components/searchBar";
import "./style/searchBar.css";
import "./style/playlist.css";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Jamming</h1>
      </div>
      <div className="page_wrapper">
        <SearchBar />
      </div>
      <div className="songBoard">
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
        <PlaylistSong />
      </div>
    </div>
  );
}

export default App;
