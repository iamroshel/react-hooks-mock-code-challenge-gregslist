import { useState , useEffect } from 'react'
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchItem, setSearchItem] = useState("")
  
  function getListings() {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then((data) => setListings(data) )
  }

  const displayItems = ()=>{
    return (searchItem ? listings.filter(listing=> listing.description.match(searchItem)): listings)
  }
 

  useEffect(getListings, [])

  const deleteListing = (id)=>{
    setListings(listings.filter(listing=>listing.id!==id))
  }
  return (
    <div className="app">
      <Header setSearchItem={setSearchItem}/>
      <ListingsContainer listings={displayItems()} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
