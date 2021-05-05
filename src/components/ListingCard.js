import React, {useState} from "react";

function ListingCard({description, location, image, id, handleDelete}) {

  let [fav, updateFav] = useState(true)

  // function handleFavClick() 

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick = {() => updateFav(!fav)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {() => updateFav(!fav)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {() => handleDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
