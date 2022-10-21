import React, { useCallback, useState } from 'react';
import { Link } from "react-router-dom";
import "../../src/style/Home.css";

function Home() {
  const [query, setQuery] = useState('');
  const onQueryChange = useCallback(event => {
    setQuery(event.target.value);
  }, []);

  return (
    <div>
      <div className="title">Price App</div>
      <div className="wrapper">
        <input className="input" placeholder="Search..." onChange={onQueryChange} value={query}/>
        <Link className="searchButton" style={{pointerEvents: query ? undefined : "none"}} to={`/search/${query}`}>Go</Link>
        <div className="infos">Write what you want to search for</div>
      </div>

    </div>
  );
}

export default Home;
