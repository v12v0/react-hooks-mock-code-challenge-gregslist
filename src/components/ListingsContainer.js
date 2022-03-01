import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, onDelete}) {
  





  const itemList = items.map(item => (
    <ListingCard 
      key={item.id}
      id={item.id}
      description={item.description}
      image={item.image}
      location={item.location}
      onDelete={onDelete}
    />
  ))
  return (
    <main>
      <ul className="cards">
        {itemList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
