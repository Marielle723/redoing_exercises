import React, { useState } from "react";

function Search({ title }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>😎{title}😎</h1>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="What emoji are you looking for ?"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
