import "./styles.css";
import { useState } from "react";

const tempMusicData = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];

const tempPlaylist = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];

function Navbar({ children }) {
  return (
    <nav className="container">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

function Logo() {
  return <h1>React Music App</h1>;
}

function NumberResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies ... "
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Music({ music }) {
  return (
    <ul>
      <h2>Music List</h2>
      {music.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist} ({music.genre})<button>💖</button>
        </li>
      ))}
    </ul>
  );
}

function Box({ children }) {
  return <div className="container">{children}</div>;
}

// function MusicListBox() {
//   const [musics, setMusics] = useState(tempMusicData);
//   return <Music music={musics} />;
// }

// function PlaylistBox() {
//   const [playlist, setPlaylist] = useState(tempPlaylist);
//   const addToPlaylist = (music) => {
//     setPlaylist([...playlist, music]);
//   }
//   return <Playlist playlist={playlist} />;
// }

function Playlist() {
  const [playlist, setPlaylist] = useState(tempPlaylist);

  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };

  return (
    <>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist} ({music.genre})
            <p>
              <span>⭐</span>
              <span>{music.rating}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function Main({ children }) {
  return <div className="container">{children}</div>;
}

export default function App() {
  const [music, setMusic] = useState(tempMusicData);

  return (
    <>
      <Navbar>
        <NumberResult music={music} />
      </Navbar>
      <Main>
        <Box>
          <Music music={music} />
        </Box>
        <Box>
          <Playlist />
        </Box>
      </Main>
    </>
  );
}
