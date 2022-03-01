import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [searchs, setSearchs] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then (response => response.json())
    .then ( data => setItems(data) )
  },[])

function handleDelete(id) {
  const newItems = items.filter((listing) => listing.id !== id);
  setItems(newItems);
}

const displayItems = items.filter((item) => 
  item.description.toLowerCase().includes(searchs.toLowerCase())
)


  return (
    <div className="app">
      <Header onSearch={setSearchs}/>
      <ListingsContainer
      items={displayItems}
      onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
