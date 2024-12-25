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
    <div className="w-full mb-2 pr-2 flex justify-between items-center rounded-lg overflow-hidden shadow bg-orange-200 border border-orange-400 ">
      <img
        className="w-4/12 aspect-square rounded-lg shadow-md object-cover"
        src={url}
        alt=""
      />
      <div className="w-6/12 text-wrap font-semibold">{name}</div>
      <button className="btn bg-red-600" onClick={() => deleteFavCat(id)}>
        X
      </button>
    </div>
  );
};

export default FavCatItem;
