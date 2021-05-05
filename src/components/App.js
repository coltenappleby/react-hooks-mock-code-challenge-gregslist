import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = `http://localhost:6001/listings`;


function App() {

  let [filter, updateFilter] = useState("")
  let [listings, updateListings] = useState([])

  function handleFilter (newSearch) {
    console.log(newSearch)
    updateFilter(newSearch);
  }

  function deleteListing(key) {
    console.log("CLICKED DELETE")
    // fetch(`API/${key}`, {
    //     method: "DELETE", 
    //     headers: {
    //       "Content-Type" : "application/json", },
    //     })
    //   .then(r => r.json())
    //   // .then(data)
  }

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

  const filteredListings = listings
    .filter( (listing) => 
      listing.description.toLowerCase()
        .includes( filter.toLowerCase() ) );

  return (
    <div className="app">
      <Header updateFilter = {handleFilter} />
      <ListingsContainer handleDeleteEvent = {deleteListing} listings = {filteredListings} />
    </div>
  );
}

export default App;
