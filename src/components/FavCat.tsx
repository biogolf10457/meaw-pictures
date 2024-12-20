import FavCatItem from "./FavCatItem";

const FavCat = ({
  favCats,
  deleteFavCat,
}: {
  favCats: any[];
  deleteFavCat: (id: string) => void;
}) => {
  return (
    <div className="w-1/2 p-4">
      <h2>Favourite Cats</h2>
      <div className="favCatContainer">
        {favCats.map((favCat) => (
          <FavCatItem
            key={favCat.id}
            id={favCat.id}
            url={favCat.url}
            name={favCat.name}
            deleteFavCat={deleteFavCat}
          />
        ))}
      </div>
    </div>
  );
};

export default FavCat;
