import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
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
  const [favCats, setFavCats] = useState<any[]>([]);
  const amountList = [1, 4, 9];
  const name: string = "John Doe";

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
      console.log(json);
      console.log(amount);
    } catch (error) {
      console.log(error);
    }
  }

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

  function addFavCat(name: string, url: string) {
    setFavCats((currentFavCats) => [
      ...currentFavCats,
      { id: crypto.randomUUID(), name, url },
    ]);
  }

  function deleteFavCat(id: string) {
    setFavCats((currentFavCats) =>
      currentFavCats.filter((favCat) => favCat.id !== id)
    );
  }

  console.log(favCats);

  return (
    <div className="App">
      <h1>{name}</h1>
      <div className="section">
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
                <div
                  key={image.id}
                  className="imageBlock"
                  style={{ width: `${imageWidth(images.length)}%` }}
                >
                  <img src={image.url} alt="" />
                  <div
                    className="addButton"
                    onClick={() => addFavCat(image.id, image.url)}
                  >
                    +
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="sectionItem">
          <h2>Favourite Cats</h2>
          <div className="favCatContainer">
            {favCats.map((favCat) => (
              <div className="favCatItem" key={favCat.id}>
                <div className="favCatImage">
                  <img src={favCat.url} alt="" />
                </div>
                <div className="favCatName">{favCat.name}</div>
                <div
                  className="deleteButton"
                  onClick={() => deleteFavCat(favCat.id)}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
