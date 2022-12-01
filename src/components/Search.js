import React, {useState} from "react";

function Search({setSearchItem}) {
  const [query, setQuery] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchItem(e.target.search.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
