const FavCatItem = ({
  id,
  url,
  name,
  deleteFavCat,
}: {
  id: string;
  url: string;
  name: string;
  deleteFavCat: (id: string) => void;
}) => {
  return (
    <div className="favCatItem">
      <div className="favCatImage">
        <img src={url} alt="" />
      </div>
      <div className="favCatName">{name}</div>
      <div
        className="px-3 py-1 text-lg rounded-lg bg-red-600 hover:bg-red-400 hover:cursor-pointer"
        onClick={() => deleteFavCat(id)}
      >
        X
      </div>
    </div>
  );
};

export default FavCatItem;
