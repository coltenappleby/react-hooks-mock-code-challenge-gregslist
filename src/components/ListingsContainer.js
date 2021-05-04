import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  const showListings = listings.map( (listing) => (
    < ListingCard description = {listing.description} image = {listing.image} location = {listing.location} />
  ))
  return (
    <main>
      <ul className="cards">
        {showListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
