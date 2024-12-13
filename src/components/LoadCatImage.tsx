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
    <div
      key={id}
      className="imageBlock"
      style={{ width: `${imageWidth(amount)}%` }}
    >
      <img src={url} alt="" />
      <div className="addButton" onClick={() => addFavCat(id, url)}>
        +
      </div>
    </div>
  );
};

export default LoadCatImage;
