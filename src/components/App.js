import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = `http://localhost:6001/listings`;


function App() {

  let [listings, updateListings] = useState([])

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(listings => {
        const list = listings.map((listing) => {
          return {...listing, deleted: false, favorite: false}
        });
        updateListings(list)
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings = {listings} />
    </div>
  );
}

export default App;
