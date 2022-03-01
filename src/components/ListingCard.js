import React, {useState} from "react";

function ListingCard({onDelete, image, description, location, id}) {
  const [ isFav, setIsFave] = useState(false);

  function handleFav(){
    setIsFave ( isFav => !isFav );
  }

function handleClick(){
  fetch(`http://localhost:6001/listings/${id}`, {
    method: 'DELETE',
  })
 onDelete(id)
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
          <button  
          onClick={handleFav} 
          className= { isFav ? 'emoji-button favorite active' : "emoji-button favorite"}>{ isFav ? "★" : "☆"}
          </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
