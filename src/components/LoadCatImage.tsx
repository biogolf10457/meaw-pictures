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
    <div className="aspect-square relative border-red-600 overflow-hidden">
      <img src={url} alt="" className="w-full h-full object-cover" />
      <div
        className="btn absolute bg-green-400 top-1 right-1 hover:bg-green-700"
        onClick={() => addFavCat(id, url)}
      >
        +
      </div>
    </div>
  );
};

export default LoadCatImage;
