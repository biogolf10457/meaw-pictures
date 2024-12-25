import FavCatItem from "./FavCatItem";

const FavCat = ({
  favCats,
  deleteFavCat,
}: {
  favCats: any[];
  deleteFavCat: (id: string) => void;
}) => {
  return (
    <div className="border-4 border-orange-400 rounded-2xl w-full lg:w-[49%] p-4">
      <h2 className="text-center text-orange-700">My Favourite Cats</h2>
      <div className="w-full rounded-lg overflow-y-scroll overflow-x-hidden h-[90vh]">
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
