import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";
// description = {listing.description} image = {listing.image} location = {listing.location}

function ListingsContainer({listings, handleDeleteEvent}) {

  const showListings = listings.map( (listing) => (
    < ListingCard {...listing} key = {listing.id} handleDelete = {handleDeleteEvent} />
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
