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
      <button className="btn bg-red-600" onClick={() => deleteFavCat(id)}>
        X
      </button>
    </div>
  );
};

export default FavCatItem;
