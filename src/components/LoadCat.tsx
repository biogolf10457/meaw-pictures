import { useEffect, useState } from "react";
import LoadCatImage from "./LoadCatImage";

const LoadCat = ({
  addFavCat,
}: {
  addFavCat: (name: string, url: string) => void;
}) => {
  type Cat = {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds?: any;
    favourite?: any;
  };
  const [images, setImages] = useState<Cat[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const amountList = [1, 4, 9];

  useEffect(() => {
    refreshImage();
  }, []);

  async function refreshImage() {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${amount}`,
        {
          headers: {
            "x-api-key":
              "live_fXPubrL0cMOfzexjHxWIAEoExyHhZrM98ywb8qeNah8fFqO972d64kfNztyvVgD1",
          },
        }
      );
      const json = await response.json();
      setImages(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sectionItem">
      <div>
        <label htmlFor="amount">Select amount per load</label>
        <select
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        >
          {amountList.map((a) => (
            <option value={a} key={a}>
              {a}
            </option>
          ))}
        </select>
        <button onClick={() => refreshImage()}>Reload</button>
      </div>
      <div className="imagesContainer">
        {images &&
          images.map((image) => (
            <LoadCatImage
              key={image.id}
              id={image.id}
              url={image.url}
              amount={images.length}
              addFavCat={addFavCat}
            />
          ))}
      </div>
    </div>
  );
};

export default LoadCat;
