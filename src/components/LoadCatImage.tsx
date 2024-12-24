const LoadCatImage = ({
  id,
  url,
  amount,
  addFavCat,
}: {
  id: string;
  url: string;
  amount: number;
  addFavCat: (name: string, url: string) => void;
}) => {
  const imageWidth = (amountImage: number): number => {
    switch (amountImage) {
      case 1:
        return 100;
      case 4:
        return 50;
      case 9:
        return 33;
      default:
        return 100;
    }
  };
  return (
    <div className="aspect-square relative rounded-2xl shadow-md overflow-hidden">
      <img src={url} alt="" className="w-full h-full object-cover" />
      <button
        className="btn absolute bg-green-400 top-2 right-2"
        onClick={() => addFavCat(id, url)}
      >
        +
      </button>
    </div>
  );
};

export default LoadCatImage;
