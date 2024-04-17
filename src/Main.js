
  function Music({ music }) {
    return (
      <ul>
        <h2>Music List</h2>
        {music.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist} ({music.genre})
            <button>💖</button>
          </li>
        ))}
      </ul>
    );
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

  
  function Main({children}) {
    return (
      <div className="container">
        {children}
      </div>
    );
  }
  export default Main;