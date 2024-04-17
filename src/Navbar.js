
import { useState } from "react";

function Navbar({children}) {
    return (
      <nav className="container">
        <Logo />
        <Search />
        { children }
      </nav>
    );
  }
  
  function Logo() {
    return <h1>React Music App</h1>
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
export default Navbar  