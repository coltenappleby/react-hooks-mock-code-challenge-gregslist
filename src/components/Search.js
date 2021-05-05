import React, {useState} from "react";

function Search( {updateFilter} ) {

  let [search, updateSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    updateFilter(search)
    // console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
