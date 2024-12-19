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
        className="btn bg-red-600 hover:bg-red-400"
        onClick={() => deleteFavCat(id)}
      >
        X
      </div>
    </div>
  );
};

export default FavCatItem;
