import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {
  


  return (
    <main>
      <ul className="cards">
        {listings.map((listing, index)=><ListingCard key={index} listing={listing} deleteListing={deleteListing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
