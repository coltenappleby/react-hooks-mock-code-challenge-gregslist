import React from "react";
import Search from "./Search";

function Header({updateFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateFilter = {updateFilter} />
    </header>
  );
}

export default Header;
