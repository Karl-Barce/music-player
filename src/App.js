      import "./styles.css";
      import { useState } from "react";

      const tempMusicData = [
        {
          id: 1,
          title: "Song 1",
          artist: "Artist A",
          genre: "Pop"
          },
          {
          id: 2,
          title: "Rhythm of the Rain",
          artist: "Rainy Days Band",
          genre: "Rock"
          },
          {
          id: 3,
          title: "Jazz Nights",
          artist: "Smooth Sounds Trio",
          genre: "Jazz"
          },
          {
          id: 4,
          title: "Country Roads",
          artist: "Western Winds",
          genre: "Country"
          },
          {
          id: 5,
          title: "Electric Dreams",
          artist: "Future Funk",
          genre: "Electronic"
          },
          {
          id: 6,
          title: "Soulful Serenade",
          artist: "Groove Guardians",
          genre: "Pop"
          },
          {
          id: 7,
          title: "Classical Crescendo",
          artist: "Symphony Orchestra",
          genre: "Classical"
          },
          {
          id: 8,
          title: "Folklore Tales",
          artist: "Acoustic Wanderers",
          genre: "Folk"
          },
          {
          id: 9,
          title: "Blues Highway",
          artist: "Delta Blues Band",
          genre: "Blues"
          },
          {
          id: 10,
          title: "Metal Mayhem",
          artist: "Thunderous Titans",
          genre: "Metal"
          },
          {
          id: 11,
          title: "Reggae Vibes",
          artist: "Island Rhythms",
          genre: "Reggae"
          },
          {
          id: 12,
          title: "Hip-Hop Hustle",
          artist: "Urban Beats",
          genre: "Hip-Hop"
          },
          {
          id: 13,
          title: "Gospel Glory",
          artist: "Heavenly Voices Choir",
          genre: "Pop"
          },
          {
          id: 14,
          title: "Funk Fusion",
          artist: "Groove Masters",
          genre: "Funk"
          },
          {
          id: 15,
          title: "Techno Trance",
          artist: "Digital Dreamers",
          genre: "Electronic"
          },
          {
          id: 16,
          title: "Ragtime Revelry",
          artist: "Vintage Virtuosos",
          genre: "Jazz"
          },
          {
          id: 17,
          title: "Opera Overture",
          artist: "Opera Divas",
          genre: "Classical"
          },
          {
          id: 18,
          title: "Ska Skank",
          artist: "Skankin' Saints",
          genre: "Reggae"
          },
          {
          id: 19,
          title: "Punk Power",
          artist: "Rebel Rousers",
          genre: "Rock"
          },
          {
          id: 20,
          title: "Ambient Bliss",
          artist: "Ethereal Echoes",
          genre: "Electronic"
          }
      ];

      const tempPlaylist = [

      ];


      function Box({children}) {
        return <div className="container">{children}</div>
      }

      function Music({ music, onAddToPlaylist}) {
        const handleAddToPlaylist = (item) => { 
          return onAddToPlaylist(item)
        }
        return (
          <ul>
            <h2>Music List</h2>
            {music.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist} ({music.genre})
                <button onClick={() => handleAddToPlaylist(music)}>💖</button>
              </li>
            ))}
          </ul>
        );
      }

      function Main({children}) {
        return (
          <div className="container">
            {children}
          </div>
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
      function NumberResult({music}) {
        return (
          <p>
            Found <strong>{ music.length }</strong> results
          </p>
        );
      }

      function Playlist({playlist}) {

          return (
            <>
              <h2>Playlist</h2>
              <p>total songs: {playlist.length}</p>
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
      function Navbar({ children, onSearch, onSort }) {
        const handleSortChange = (e) => {
          onSort(e.target.value);
        };
      
        return (
          <nav className="container">
            <Logo />
            <Search onSearch={onSearch} />
            <select onChange={handleSortChange}>
              <option value="">Sort by</option>
              <option value="genre">Genre</option>
              <option value="title">Title</option>
            </select>
            {children}
          </nav>
        );
      }

      function Logo() {
        return <h1>React Music App</h1>
      }


      function Search({onSearch}) {
        const [query, setQuery] = useState("");
      const handleSearch = (e) => {
        e.preventDefault()
        onSearch(query);
      }
        return (
          <form onSubmit={handleSearch}>
          <input
            className="search"
            type="text"
            placeholder="Search movies ... "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          </form>
        );
      }
      export default function App() {
        const [music, setMusic] = useState(tempMusicData);
        const [playlist, setPlaylist] = useState(tempPlaylist);
        const [sortOption, setSortOption] = useState("");
      
        const addToPlaylist = (item) => {
          setPlaylist([...playlist, item]);
        };
      
        const handleSearch = (query) => {
          if (query.length === 0) return setMusic(tempMusicData);
      
          setMusic((music) => {
            return music.filter((item) => {
              return item.title.toLowerCase().includes(query.toLowerCase());
            });
          });
        };
      
        const sortMusic = (option) => {
          let sortedMusic = [...music];
        
          if (option === "genre") {
            // Group music items by genre
            const groupedByGenre = {};
            sortedMusic.forEach((item) => {
              if (!groupedByGenre[item.genre]) {
                groupedByGenre[item.genre] = [];
              }
              groupedByGenre[item.genre].push(item);
            });
        
            // Sort genres alphabetically
            const sortedGenres = Object.keys(groupedByGenre).sort();
        
            // Sort music items within each genre
            sortedMusic = sortedGenres.flatMap((genre) => groupedByGenre[genre]);
          } else if (option === "title") {
            sortedMusic.sort((a, b) => a.title.localeCompare(b.title));
          }
        
          setSortOption(option);
          setMusic(sortedMusic);
        };
      
        return (
          <>
            <Navbar onSearch={handleSearch} onSort={sortMusic}>
              <NumberResult music={music} />
            </Navbar>
            <Main>
              <Box>
                <Music music={music} onAddToPlaylist={addToPlaylist} />
              </Box>
              <Box>
                <Playlist playlist={playlist} />
              </Box>
            </Main>
          </>
        );
      }
      