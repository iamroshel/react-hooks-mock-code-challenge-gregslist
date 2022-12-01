import React, { useState } from "react";

function ListingCard({listing, deleteListing}) {
  const [isFave, setIsFave] = useState(false)

  const handleClick = ()=>{
    setIsFave(!isFave)
  }

  const handleDelete = ()=>{
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }
    })
    .then(res=>res.json())
    .then(message=>{
      console.log(message)
      deleteListing(listing.id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFave ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
